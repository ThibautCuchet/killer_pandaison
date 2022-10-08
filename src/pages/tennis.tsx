import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import gql from "graphql-tag";
import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GameContext, User } from "../contexts/game";
import SelectUser from "../layouts/select-user";
import {
  GetNextTennisQuery,
  GetNextTennisQueryVariables,
} from "../types/graphql";
import { hasura } from "../utils/gql";

const Page: NextPage = () => {
  const { user, setUser } = useContext(GameContext);

  const nextTennis = useQuery<GetNextTennisQuery, GetNextTennisQueryVariables>(
    ["next-tennis"],
    () =>
      hasura(gql`
        query GetNextTennis {
          events(
            where: { type: { _eq: "tennis" }, end_date: { _gt: "now()" } }
            order_by: { start_date: asc }
            limit: 1
          ) {
            id
            start_date
          }
        }
      `)
  );

  const inscrireMutation = useMutation(["inscrire"], (userId: string) =>
    hasura(
      gql`
        mutation Inscrire($eventId: uuid!, $userId: uuid!) {
          insert_tennis_one(object: { event_id: $eventId, user_id: $userId }) {
            event_id
          }
        }
      `,
      {
        eventId: nextTennis.data?.events[0]?.id,
        userId: userId,
      }
    )
  );

  const handleSelectUser = (user: User) => {
    inscrireMutation.mutateAsync(user.id);
  };

  if (inscrireMutation.isSuccess) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-background">
        <div className="absolute top-0 left-0 flex items-center w-full h-20 p-3 bg-secondary">
          <Link href="/">
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </Link>
        </div>
        Tu es inscrit pour le prochain tennis !
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-background">
        <div className="absolute top-0 left-0 flex items-center w-full h-20 p-3 bg-secondary">
          <Link href="/">
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </Link>
        </div>
        {nextTennis.data && nextTennis.data.events.length > 0 ? (
          <>
            <SelectUser
              onConfirm={handleSelectUser}
              title={`Tennis à ${new Date(
                nextTennis.data.events[0].start_date
              ).toLocaleTimeString()}`}
            />
          </>
        ) : (
          <div className="text-center">
            Il n&lsquo;a pas de tennis de prévu prochainement !
          </div>
        )}
      </div>
      );
    </div>
  );
};

export default Page;
