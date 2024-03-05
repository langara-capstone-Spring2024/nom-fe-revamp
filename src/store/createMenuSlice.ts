import { StateCreator } from "zustand";

export interface IMenuSlice {
  isMenuScreen: boolean;
  setMenuScreen: (isMenuScreen: boolean) => void;
  isAddingMenuItem: boolean;
  setIsAddingMenuItem: (isAddingItem: boolean) => void;
}

export const createMenuSlice: StateCreator<IMenuSlice> = (set) => ({
  isMenuScreen: false,
  setMenuScreen: (isMenuScreen): void => {
    set({ isMenuScreen });
  },
  isAddingMenuItem: false,
  setIsAddingMenuItem: (isAddingItem): void => {
    set({ isAddingMenuItem: isAddingItem });
  },
});
