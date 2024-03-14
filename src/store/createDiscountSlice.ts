import { StateCreator } from "zustand";
import { Menu } from "../types";
import { MenuItem } from "../screens/PromoDetails/PromoDetails.props";

export interface IDiscountSlice {
  selectedItem: any | null;
  accordionExpanded: boolean;
  setSelectedItem: (item: any | null) => void;
  setAccordionExpanded: (expanded: boolean) => void;
  selectedMenuItemIds: MenuItem[];
  setSelectedMenuItemIds: (item: MenuItem[]) => void;
}

export const createDiscountSlice: StateCreator<IDiscountSlice> = (set) => ({
  selectedItem: null,
  accordionExpanded: false,
  setSelectedItem: (item) => set({ selectedItem: item }),
  setAccordionExpanded: (expanded) => set({ accordionExpanded: expanded }),
  selectedMenuItemIds: [{ _id: "", merchant: "", name: "", originalPrice: "" }],
  setSelectedMenuItemIds: (item: MenuItem[]) =>
    set({ selectedMenuItemIds: item }),
});
