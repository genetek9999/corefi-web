import { create } from "zustand";

type State = {
  valueFrom?: string;
};

type Action = {
  setValueFrom: (value: State["valueFrom"]) => void;
};

export const useValue = create<State & Action>((set) => ({
  valueFrom: "",

  setValueFrom: (valueFrom) => set(() => ({ valueFrom })),
}));
