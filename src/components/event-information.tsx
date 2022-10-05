import { useQuery } from "@tanstack/react-query";
import { differenceInMilliseconds } from "date-fns";
import intervalToDuration from "date-fns/intervalToDuration";
import gql from "graphql-tag";
import { FC, useContext } from "react";
import { GameContext } from "../contexts/game";
import { GetToKillQuery, GetToKillQueryVariables } from "../types/graphql";
import { hasura } from "../utils/gql";
import Countdown from "./countdown";
import KillAction from "./kill-action";
import KillData from "./kill-data";

const EventInformation: FC = () => {
  const { event, user } = useContext(GameContext);
  const remain = differenceInMilliseconds(
    event?.start_at || Date.now(),
    Date.now()
  );
  const duration = intervalToDuration({
    start: 0,
    end: remain,
  });

  const { data: killerData } = useQuery(
    ["killer", event],
    () =>
      hasura<GetToKillQuery, GetToKillQueryVariables>(
        gql`
          query GetToKill($eventId: uuid!, $userId: uuid!) {
            games(
              where: { event_id: { _eq: $eventId }, user_id: { _eq: $userId } }
            ) {
              to_kill {
                fullname
                kills {
                  action {
                    action
                  }
                }
              }
              killed_by {
                fullname
              }
            }
          }
        `,
        {
          eventId: event?.id,
          userId: user?.id,
        }
      ),
    {
      enabled: !!event?.id && remain <= 0,
    }
  );

  if (killerData?.games?.[0]?.killed_by) {
    return (
      <div>
        Vous avez été tué par {killerData?.games?.[0].killed_by.fullname}
      </div>
    );
  }

  if (killerData?.games?.[0]?.to_kill)
    return (
      <>
        <div>Salut {user?.fullname}</div>
        <KillData killerData={killerData.games[0].to_kill} />
        <KillAction />
      </>
    );
  return <Countdown duration={duration} />;
};

export default EventInformation;
