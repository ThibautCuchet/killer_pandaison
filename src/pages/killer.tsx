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
            <p className="font-bold">
              Les règles sont simples, tu dois tuer tout le monde !
            </p>
            Pour ce faire, tu recevras une personne et une action. Si la
            personne réalise cette action, elle est killé. Si jamais tu pars
            n&lsquo;oublie pas de te déconnecter pour éviter de bloquer le jeux.
            Vérifie ton téléphone régulièrement car ton kill peut changer.
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
