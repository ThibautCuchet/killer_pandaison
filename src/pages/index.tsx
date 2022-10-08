import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GameContext } from "../contexts/game";

const Home: NextPage = () => {
  const { user } = useContext(GameContext);

  return (
    <div className="flex items-center justify-center h-screen gap-10 bg-background">
      <Link href="/killer">
        <div className="inline-flex items-center justify-center w-24 px-4 py-2 text-xl font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Killer
        </div>
      </Link>
      <Link href="/tennis">
        <div className="inline-flex items-center justify-center w-24 px-4 py-2 text-xl font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Tennis
        </div>
      </Link>
    </div>
  );
};

export default Home;
