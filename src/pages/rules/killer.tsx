import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GameContext } from "../../contexts/game";

const Home: NextPage = () => {
  const { user } = useContext(GameContext);

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="absolute top-0 left-0 flex items-center w-full h-20 p-3 bg-secondary">
        <Link href="/killer">
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </Link>
      </div>
      <div className="p-4 text-2xl">
        <p className="font-bold">
          Les règles sont simples, tu dois tuer tout le monde !
        </p>
        Pour ce faire, tu recevras une personne et une action. Si la personne
        réalise cette action, elle est killée. Si jamais tu pars, n&lsquo;oublie
        pas de te killer, pour éviter de bloquer le jeu. Vérifie ton téléphone
        régulièrement car ton kill peut changer.
      </div>
    </div>
  );
};

export default Home;
