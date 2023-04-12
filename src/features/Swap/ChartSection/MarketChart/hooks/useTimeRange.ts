import type { DurationInputArg1, DurationInputArg2 } from "moment";
import { create } from "zustand";

enum key {
  "1h" = "1h",
  "4h" = "4h",
  "1d" = "1d",
  "1w" = "1w",
  "1m" = "1m",
  "6m" = "6m",
}

export interface ITimeRangeOption {
  label: string;
  desc: string;
  value: {
    amount: DurationInputArg1;
    unit: DurationInputArg2;
  };
}

export const timeRangeOptions: Record<key, ITimeRangeOption> = {
  [key["1h"]]: {
    label: "1h",
    desc: "Past hour",
    value: {
      amount: 1,
      unit: "hours",
    },
  },
  [key["4h"]]: {
    label: "4h",
    desc: "Past 4 hours",
    value: {
      amount: 4,
      unit: "hours",
    },
  },
  [key["1d"]]: {
    label: "1d",
    desc: "Past 24 hours",
    value: {
      amount: 1,
      unit: "days",
    },
  },
  [key["1w"]]: {
    label: "1w",
    desc: "Past week",
    value: {
      amount: 1,
      unit: "weeks",
    },
  },
  [key["1m"]]: {
    label: "1m",
    desc: "Past month",
    value: {
      amount: 1,
      unit: "months",
    },
  },
  [key["6m"]]: {
    label: "6m",
    desc: "Past 6 months",
    value: {
      amount: 6,
      unit: "months",
    },
  },
};

type State = {
  option: ITimeRangeOption;
};

type Action = {
  setOption: (option: State["option"]) => void;
};

export const useTimeRange = create<State & Action>((set) => ({
  option: timeRangeOptions["1h"],
  setOption: (option) => set(() => ({ option })),
}));
