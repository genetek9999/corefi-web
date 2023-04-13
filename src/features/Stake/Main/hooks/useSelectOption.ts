import { create } from "zustand";

export enum stakeOptions {
  STAKE = "Stake",
  UNSTAKE = "Unstake",
}

type State = {
  value: stakeOptions;
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const useSelectOption = create<State & Action>((set) => ({
  value: stakeOptions.STAKE,
  setValue: (value) => set(() => ({ value })),
}));
