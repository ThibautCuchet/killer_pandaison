import type { NextPage } from "next";
import { useContext } from "react";
import { GameContext } from "../contexts/game";
import Killer from "../layouts/killer";
import SelectUser from "../layouts/select-user";

const Home: NextPage = () => {
  const { user } = useContext(GameContext);

  return (
    <div className="h-screen bg-background">
      {user ? (
        <Killer />
      ) : (
        <>
          <SelectUser />
          <div className="fixed bottom-0 p-5 text-lg">
            <p>Les règles sont simples, tu dois tuer tout le monde !</p>
            Pour ce faire, tu recevras une personne et une action. Si la
            personne réalise cette action, elle est killé. Si jamais tu pars
            n'oublie pas de te déconnecter pour éviter de bloquer le jeux.
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
