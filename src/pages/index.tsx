import type { NextPage } from "next";
import { useContext } from "react";
import { GameContext } from "../contexts/game";
import Killer from "../layouts/killer";
import SelectUser from "../layouts/select-user";

const Home: NextPage = () => {
  const { user } = useContext(GameContext);

  return (
    <div className="h-screen bg-background">
      {user ? <Killer /> : <SelectUser />}
    </div>
  );
};

export default Home;
