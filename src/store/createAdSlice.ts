import { StateCreator } from "zustand";

export interface IAdSlice {
  page: number;
  previous: () => void;
  next: () => void;
  isAdScreen: boolean;
  setAdScreen: (v: boolean) => void;
}

export const createAdSlice: StateCreator<IAdSlice> = (set) => ({
  page: 1,
  isAdScreen: false,
  previous: () => {
    set((state) => {
      return {
        ...state,
        page: state.page - 1,
      };
    });
  },
  next: () => {
    set((state) => {
      return {
        ...state,
        page: state.page + 1,
      };
    });
  },
  setAdScreen: (v) => {
    set((state) => {
      return {
        ...state,
        isAdScreen: v,
      };
    });
  },
});
