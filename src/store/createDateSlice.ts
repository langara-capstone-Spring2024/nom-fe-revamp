import { StateCreator } from "zustand";

export interface IDateSlice {
  dateValue: string;
  setDateValue: (arg: string) => void;
}

export const createDateSlice: StateCreator<IDateSlice> = (set, get) => ({
  dateValue: get()?.dateValue || new Date().toISOString().split("T")[0],
  setDateValue: (value) => set({ dateValue: value }),
});

export const getDateValue = (state: IDateSlice) => state.dateValue;
