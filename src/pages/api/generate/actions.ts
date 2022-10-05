import gql from "graphql-tag";
import { NextApiHandler } from "next";
import { hasura } from "../../../utils/gql";
import {} from "../../../types/graphql";
import {
  GetPlayersQuery,
  GetPlayersQueryVariables,
} from "../../../types/graphql";
import { map, slice } from "lodash";

const handler: NextApiHandler = async (req, res) => {
  const { eventId } = req.body;

  const usersQuery = await hasura<GetPlayersQuery, GetPlayersQueryVariables>(
    gql`
      query GetPlayers {
        users {
          id
        }
        actions {
          id
        }
      }
    `,
    {},
    {},
    {
      "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET || "",
    }
  );

  const players = usersQuery.users;
  const actions = usersQuery.actions;

  const kills = map(players, (player, i) => ({
    event_id: eventId,
    user_id: player.id,
    action_id: actions[i % actions.length].id,
  }));

  const firstBoucle = slice(players, 0, players.length / 2);
  const secondBoucle = slice(players, players.length / 2, players.length);

  const games = map(firstBoucle, (player, i) => ({
    event_id: eventId,
    user_id: player.id,
    to_kill_id: firstBoucle[(i + 1) % firstBoucle.length].id,
  }));

  games.push(
    ...map(secondBoucle, (player, i) => ({
      event_id: eventId,
      user_id: player.id,
      to_kill_id: secondBoucle[(i + 1) % secondBoucle.length].id,
    }))
  );

  const result = await hasura(
    gql`
      mutation InsertKills(
        $kills: [kills_insert_input!]!
        $games: [games_insert_input!]!
      ) {
        insert_kills(objects: $kills) {
          affected_rows
        }
        insert_games(objects: $games) {
          affected_rows
        }
      }
    `,
    {
      kills,
      games,
    },
    {},
    {
      "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET || "",
    }
  );

  res.json(result);
  return;
};

export default handler;
