import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { GameContext } from "../contexts/game";

const KillAction = () => {
  const { event, user } = useContext(GameContext);
  const queryClient = useQueryClient();
  const killedMutation = useMutation(
    ["killed"],
    () =>
      fetch("/api/killed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event?.id,
          userId: user?.id,
        }),
      }),
    {
      onSuccess: async (data) => {
        queryClient.invalidateQueries(["killer", event]);
        const json = await data.json();
        alert(`Tu as été tué par ${json.fullname}`);
      },
    }
  );

  const contreKilledMutation = useMutation(
    ["contreKilled"],
    () =>
      fetch("/api/contrekilled", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event?.id,
          userId: user?.id,
        }),
      }),
    {
      onSuccess: async (data) => {
        queryClient.invalidateQueries(["killer", event]);
        const json = await data.json();
        alert(`Tu as été tué par ${json.fullname}`);
      },
    }
  );

  const handleKill = () => {
    const isKilled = confirm("Es-tu sûr d'avoir été killé ?");
    if (isKilled) {
      killedMutation.mutate();
    }
  };

  const handleContreKill = () => {
    const isContreKilled = confirm("Es-tu sûr d'avoir été contre-killé ?");
    if (isContreKilled) {
      contreKilledMutation.mutate();
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleKill}
        className="p-2 text-white bg-blue-600 rounded"
      >
        J&lsquo;ai été killé
      </button>
      <button
        onClick={handleContreKill}
        className="p-2 text-white bg-blue-600 rounded"
      >
        J&lsquo;ai été contre-killé
      </button>
    </div>
  );
};

export default KillAction;
