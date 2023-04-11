import { create } from "zustand";

type State = {
  value?: number | string;
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const slippageOptions = [0.05, 0.1, 0.5, 1];

export const useSlippage = create<State & Action>((set) => ({
  value: slippageOptions[0],
  setValue: (value) => set(() => ({ value })),
}));
