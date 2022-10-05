import { FC } from "react";
import { GetToKillQuery } from "../types/graphql";

const KillData: FC<{
  killerData: GetToKillQuery["games"][number]["to_kill"];
}> = ({ killerData: { fullname, kills } }) => {
  return (
    <div>
      <h3>Ton kill :</h3>
      <div>Personne : {fullname}</div>
      <div>Action : {kills[0].action.action}</div>
    </div>
  );
};

export default KillData;
