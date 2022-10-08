import { FC } from "react";
import { GetToKillQuery } from "../types/graphql";

const KillData: FC<{
  killerData: GetToKillQuery["games"][number]["to_kill"];
}> = ({ killerData: { fullname, kills } }) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="self-center">Ton kill</h3>
      <div className="flex flex-col">
        <div>Personne : {fullname}</div>
        <div>Action : {kills[0].action.action}</div>
      </div>
    </div>
  );
};

export default KillData;
