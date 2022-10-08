import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GameContext } from "../contexts/game";

const Home: NextPage = () => {
  const { user } = useContext(GameContext);

  return (
    <div className="h-screen bg-background">
      <Link href="/killer">Killer</Link>
    </div>
  );
};

export default Home;
