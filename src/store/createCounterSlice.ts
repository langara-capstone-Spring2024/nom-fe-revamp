import { StateCreator } from "zustand";

export interface ICounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByValue: (arg: string) => void;
}

export const createCounterSlice: StateCreator<ICounterSlice> = (set) => ({
  count: 0,
  increment: () => {
    set((state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    });
  },
  decrement: () => {
    set((state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    });
  },
  reset: () => {
    set((state) => {
      return {
        ...state,
        count: 0,
      };
    });
  },
  incrementByValue: (value) =>
    set((state) => ({
      ...state,
      count: state.count + Number(value),
    })),
});
