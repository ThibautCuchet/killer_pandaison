import gql from "graphql-tag";
import { map, shuffle } from "lodash";
import { NextApiHandler } from "next";
import { hasura } from "../../../utils/gql";

const handler: NextApiHandler = async (req, res) => {
  const { eventId } = req.body;
  try {
    const allUsers = await hasura(
      gql`
        query NotInGame {
          users(where: { is_present: { _eq: true } }) {
            games {
              user_id
            }
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

    const notInGame = allUsers.users.filter(
      (user: any) => user.games.length === 0
    );

    const players = shuffle(notInGame);
    const actions = shuffle(allUsers.actions);

    const kills = map(players, (player, i) => ({
      event_id: eventId,
      user_id: player.id,
      action_id: actions[i % actions.length].id,
    }));

    const games = map(players, (player, i) => ({
      event_id: eventId,
      user_id: player.id,
      to_kill_id: players[(i + 1) % players.length].id,
    }));
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
  } catch (err) {
    res
      .status(500)
      .json({ err, secret: process.env.HASURA_GRAPHQL_ADMIN_SECRET });
  }
};

export default handler;
