import { useQuery } from "@tanstack/react-query";
import differenceInSeconds from "date-fns/differenceInSeconds";
import gql from "graphql-tag";
import { useContext } from "react";
import EventInformation from "../components/event-information";
import { GameContext } from "../contexts/game";
import {
  GetNextKillerQuery,
  GetNextKillerQueryVariables,
} from "../types/graphql";
import { hasura } from "../utils/gql";
const Killer = () => {
  const { event, setEvent } = useContext(GameContext);

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

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      {event ? (
        <EventInformation />
      ) : (
        <div>Il n&lsquo;y a plus de partie de prévue</div>
      )}
    </div>
  );
};

export default Killer;
