import gql from "graphql-tag";
import {
  GetGameContreUserQuery,
  GetGameContreUserQueryVariables,
  UpdateContreGameMutation,
  UpdateContreGameMutationVariables,
} from "../../types/graphql";
import { hasura } from "../../utils/gql";

const contreKillUser = async ({
  userId,
  eventId,
}: {
  userId: string;
  eventId: string;
}): Promise<GetGameContreUserQuery> => {
  const userGame = await hasura<
    GetGameContreUserQuery,
    GetGameContreUserQueryVariables
  >(
    gql`
      query GetGameContreUser($userId: uuid!, $eventId: uuid!) {
        games(
          where: { user_id: { _eq: $userId }, event_id: { _eq: $eventId } }
        ) {
          to_kill_id
          to_kill {
            fullname
          }
          user_id
          have_to_kill_by {
            user_id
            user {
              fullname
            }
          }
          kill {
            action_id
          }
        }
      }
    `,
    {
      userId,
      eventId,
    }
  );

  await hasura<UpdateContreGameMutation, UpdateContreGameMutationVariables>(
    gql`
      mutation UpdateContreGame(
        $eventId: uuid!
        $userId: uuid!
        $killedBy: uuid!
        $haveToKill: uuid!
        $actionId: Int!
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
          pk_columns: { event_id: $eventId, user_id: $haveToKill }
          _set: { to_kill_id: $killedBy }
        ) {
          user_id
        }
        update_kills(
          where: { user_id: { _eq: $killedBy } }
          _set: { action_id: $actionId }
        ) {
          affected_rows
        }
      }
    `,
    {
      eventId,
      userId,
      killedBy: userGame.games[0].to_kill_id,
      haveToKill: userGame.games[0].have_to_kill_by?.user_id,
      actionId: userGame.games[0].kill?.action_id,
    }
  );
  return userGame;
};

export { contreKillUser };
