import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="absolute top-0 left-0 flex items-center w-full h-20 p-3 bg-secondary">
        <Link href="/tennis">
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </Link>
      </div>
      <div className="p-4 text-2xl">
        Aussi connu sous le nom de bière pong Allemand. Le tennis est un jeu à
        boire ressemblant au baseball. Par partie, tu vas devoir boire une bière
        (pas plus, pas moins) le plus vite possible !
      </div>
    </div>
  );
};

export default Home;
