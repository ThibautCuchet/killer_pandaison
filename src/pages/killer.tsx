import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useMutation } from "@tanstack/react-query";
import gql from "graphql-tag";
import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GameContext, User } from "../contexts/game";
import Killer from "../layouts/killer";
import SelectUser from "../layouts/select-user";
import {
  SetPresentMutation,
  SetPresentMutationVariables,
} from "../types/graphql";
import { hasura } from "../utils/gql";

const Home: NextPage = () => {
  const { user, setUser } = useContext(GameContext);

  const presentMutation = useMutation<
    SetPresentMutation,
    unknown,
    SetPresentMutationVariables
  >(["set-resent"], ({ userId }) =>
    hasura<SetPresentMutation, SetPresentMutationVariables>(
      gql`
        mutation SetPresent($userId: uuid!) {
          update_users(
            where: { id: { _eq: $userId } }
            _set: { is_present: true }
          ) {
            affected_rows
          }
        }
      `,
      {
        userId,
      }
    )
  );

  const handleSelectUser = (user: User) => {
    setUser(user);
    presentMutation.mutateAsync({ userId: user?.id });
  };

  return (
    <div className="h-screen bg-background">
      {user ? (
        <Killer />
      ) : (
        <>
          <div className="absolute top-0 left-0 flex items-center justify-between w-full h-20 p-3 bg-secondary">
            <Link href="/">
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </Link>
          </div>
          <SelectUser
            onConfirm={handleSelectUser}
            title="Killer"
            rulesUrl="/rules/killer"
          />
        </>
      )}
    </div>
  );
};

export default Home;
