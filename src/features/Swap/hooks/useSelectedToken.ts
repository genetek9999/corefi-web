import { create } from "zustand";
import { type PropsCurrency } from "~/helpers/coingecko";

type State = {
  currencyFrom?: PropsCurrency;
  currencyTo?: PropsCurrency;
};

type Action = {
  setCurrencyFrom: (currency: State["currencyFrom"]) => void;
  setCurrencyTo: (currency: State["currencyTo"]) => void;
  switchCurrency: () => void;
};

export const useSelectedToken = create<State & Action>((set) => ({
  setCurrencyFrom: (currencyFrom) => set(() => ({ currencyFrom })),
  setCurrencyTo: (currencyTo) => set(() => ({ currencyTo })),
  switchCurrency: () =>
    set((state) => ({
      currencyFrom: state.currencyTo,
      currencyTo: state.currencyFrom,
    })),
}));
