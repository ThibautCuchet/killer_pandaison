import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type User = {
  id: string;
  fullname: string;
};

export type Event = {
  id: string;
  start_at: Date;
};

export interface GameContextType {
  user: User | null;
  event: Event | null;
  setUser: (user: User | null) => void;
  setEvent: Dispatch<SetStateAction<Event | null>>;
}

export const GameContext = createContext<GameContextType>({
  user: null,
  setUser: () => {},
  event: null,
  setEvent: () => {},
});

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<GameContextType["user"]>(null);
  const [event, setEvent] = useState<GameContextType["event"]>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleSetUser = (user: User | null) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <GameContext.Provider
      value={{ user, setUser: handleSetUser, event, setEvent }}
    >
      {children}
    </GameContext.Provider>
  );
};
