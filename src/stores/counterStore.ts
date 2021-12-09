import create from "zustand";

export const useCounterStore = create((set: any) => ({
  count: 0,
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
}));
