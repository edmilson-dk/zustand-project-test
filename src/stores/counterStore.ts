import create from "zustand";
import { persist } from "zustand/middleware";

type CounterStateType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create(
  persist(
    (set: any) => ({
      count: 0,
      increment: () =>
        set((state: CounterStateType) => ({ count: state.count + 1 })),
      decrement: () =>
        set((state: CounterStateType) => ({ count: state.count - 1 })),
    }),
    {
      name: "counterStore",
    }
  )
);

export const counterSelector = (state: CounterStateType) => state;
