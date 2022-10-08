import {
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/20/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import gql from "graphql-tag";
import Link from "next/link";
import { useContext } from "react";
import EventInformation from "../components/event-information";
import { GameContext } from "../contexts/game";
import {
  GetNextKillerQuery,
  GetNextKillerQueryVariables,
} from "../types/graphql";
import { hasura } from "../utils/gql";
const Killer = () => {
  const { event, setEvent, setUser, user } = useContext(GameContext);

  useQuery(
    ["next-killer"],
    () =>
      hasura<GetNextKillerQuery, GetNextKillerQueryVariables>(gql`
        query GetNextKiller {
          events(
            where: { type: { _eq: "killer" }, end_date: { _gt: "now()" } }
            order_by: { start_date: asc }
            limit: 1
          ) {
            id
            start_date
          }
        }
      `),
    {
      onSuccess: (data) => {
        setEvent({
          id: data.events[0].id,
          start_at: new Date(data.events[0].start_date),
        });
      },
    }
  );

  const logoutMutation = useMutation(
    ["logout"],
    () =>
      fetch("/api/logout", {
        method: "POST",
        body: JSON.stringify({
          eventId: event?.id,
          userId: user?.id,
        }),
      }),
    {
      onSuccess: () => {
        setUser(null);
      },
    }
  );

  const handleLogout = () => {
    const accept = confirm("Es-tu sûr de vouloir te déconnecter ?");
    if (accept) {
      logoutMutation.mutate();
    }
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="absolute top-0 left-0 flex flex-row-reverse items-center justify-between w-full h-20 p-3 bg-secondary">
        <button onClick={handleLogout}>
          <ArrowLeftOnRectangleIcon className="w-8 h-8 text-white" />
        </button>
        <Link href="/">
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-5">
        {event ? (
          <EventInformation />
        ) : (
          <div>Il n&lsquo;y a plus de partie de prévue</div>
        )}
      </div>
    </div>
  );
};

export default Killer;
