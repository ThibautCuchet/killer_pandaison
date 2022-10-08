import gql from "graphql-tag";
import {
  GetGameUserQuery,
  GetGameUserQueryVariables,
  UpdateGameMutation,
  UpdateGameMutationVariables,
} from "../../types/graphql";
import { hasura } from "../../utils/gql";

const killUser = async ({
  userId,
  eventId,
}: {
  userId: string;
  eventId: string;
}): Promise<GetGameUserQuery> => {
  const userGame = await hasura<GetGameUserQuery, GetGameUserQueryVariables>(
    gql`
      query GetGameUser($userId: uuid!, $eventId: uuid!) {
        games(
          where: { user_id: { _eq: $userId }, event_id: { _eq: $eventId } }
        ) {
          to_kill_id
          user_id
          have_to_kill_by {
            user_id
            user {
              fullname
            }
          }
        }
      }
    `,
    {
      userId,
      eventId,
    }
  );

  await hasura<UpdateGameMutation, UpdateGameMutationVariables>(
    gql`
      mutation UpdateGame(
        $eventId: uuid!
        $userId: uuid!
        $killedBy: uuid!
        $haveToKill: uuid!
      ) {
        killed: update_games_by_pk(
          pk_columns: { event_id: $eventId, user_id: $userId }
          _set: {
            killed_at: "now()"
            killed_by_id: $killedBy
            to_kill_id: null
          }
        ) {
          user_id
        }
        killer: update_games_by_pk(
          pk_columns: { event_id: $eventId, user_id: $killedBy }
          _set: { to_kill_id: $haveToKill }
        ) {
          user_id
        }
      }
    `,
    {
      eventId,
      userId,
      killedBy: userGame.games[0].have_to_kill_by?.user_id,
      haveToKill: userGame.games[0].to_kill_id,
    }
  );

  return userGame;
};

export { killUser };
