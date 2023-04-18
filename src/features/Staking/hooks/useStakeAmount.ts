import { create } from "zustand";

type State = {
  value: string;
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const useStakeAmount = create<State & Action>((set) => ({
  value: "",
  setValue: (value) => set(() => ({ value })),
}));
