import { StateCreator } from "zustand";
import { MenuItem } from "../screens/PromoDetails/PromoDetails.props";

export interface IMenuSlice {
  isMenuScreen: boolean;
  setMenuScreen: (isMenuScreen: boolean) => void;
  isAddingMenuItem: boolean;
  setIsAddingMenuItem: (isAddingItem: boolean) => void;
  menuData: MenuItem[];
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
  menuData: [],
});
