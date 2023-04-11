import { create } from "zustand";
import { type PropsCurrency } from "~/helpers/coingecko";

type State = {
  tokenFrom?: PropsCurrency;
  tokenTo?: PropsCurrency;
};

type Action = {
  setTokenFrom: (token: State["tokenFrom"]) => void;
  setTokenTo: (token: State["tokenTo"]) => void;
  switchToken: () => void;
};

export const useDisplayTokens = create<State & Action>((set) => ({
  setTokenFrom: (tokenFrom) => set(() => ({ tokenFrom })),
  setTokenTo: (tokenTo) => set(() => ({ tokenTo })),
  switchToken: () =>
    set((state) => ({
      tokenFrom: state.tokenTo,
      tokenTo: state.tokenFrom,
    })),
}));
