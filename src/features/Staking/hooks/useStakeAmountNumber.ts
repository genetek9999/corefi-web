import { create } from "zustand";

type State = {
  value: number;
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const useStakeAmountNumber = create<State & Action>((set) => ({
  value: 0,
  setValue: (value) => set(() => ({ value })),
}));
