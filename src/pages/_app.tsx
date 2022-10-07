import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GameProvider } from "../contexts/game";
import "@fontsource/amatic-sc";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GameProvider>
        <Component {...pageProps} />
      </GameProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
