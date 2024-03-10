import { StateCreator } from "zustand";

export interface IDiscountSlice {
  selectedItem: any | null;
  accordionExpanded: boolean;
  setSelectedItem: (item: any | null) => void;
  setAccordionExpanded: (expanded: boolean) => void;
}

export const createDiscountSlice: StateCreator<IDiscountSlice> = (set) => ({
  selectedItem: null,
  accordionExpanded: false,
  setSelectedItem: (item) => set({ selectedItem: item }),
  setAccordionExpanded: (expanded) => set({ accordionExpanded: expanded }),
});
