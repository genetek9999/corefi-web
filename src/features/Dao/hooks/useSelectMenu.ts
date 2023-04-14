import { create } from "zustand";

export enum DaoMenu {
  PROPOSALS = "proposals",
  NEW_PROPOSAL = "new proposal",
  TREASURY = "treasury",
}

type State = {
  value: DaoMenu;
};

type Action = {
  setValue: (value: State["value"]) => void;
};

export const useSelectMenu = create<State & Action>((set) => ({
  value: DaoMenu.PROPOSALS,
  setValue: (value) => set(() => ({ value })),
}));
