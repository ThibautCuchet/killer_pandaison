import gql from "graphql-tag";
import { hasura } from "../../utils/gql";

const logout = async ({ userId }: { userId: string }) => {
  return hasura(
    gql`
      mutation LogoutUser($userId: uuid!) {
        update_users_by_pk(
          pk_columns: { id: $userId }
          _set: { is_present: false }
        ) {
          fullname
        }
      }
    `,
    {
      userId,
    }
  );
};

export { logout };
