import { create } from "zustand";
import { type PropsCurrency } from "~/helpers/coingecko";

type State = {
  tokenList: PropsCurrency[];
};

type Action = {
  setTokenList: (value: State["tokenList"]) => void;
};

export const useTokenList = create<State & Action>((set) => ({
  tokenList: [],

  setTokenList: (tokenList) => set(() => ({ tokenList })),
}));
