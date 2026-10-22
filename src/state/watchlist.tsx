import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

type WatchlistContextValue = {
  ids: string[];
  toggle: (id: string) => void;
};

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export function WatchlistProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<string[]>([]);
  const value = useMemo<WatchlistContextValue>(() => ({
    ids,
    toggle: (id) => setIds((current) => current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id]),
  }), [ids]);

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) throw new Error("useWatchlist must be used inside WatchlistProvider");
  return context;
}
