import { create } from "zustand";

type State = {
  value: "main" | "info" | "settings";
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const useSelectedDisplay = create<State & Action>((set) => ({
  value: "main",
  setValue: (value) => set(() => ({ value })),
}));
