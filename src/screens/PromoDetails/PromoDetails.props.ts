export interface PromoDetailsGeneratedProps {
  accordionList: any[];
  handleSubmitDiscount: () => void;
  selectedItem: any[];
  filteredMenu?: MenuItem[];
  selectedMenuItemIds: MenuItem[];
}

export type MenuItem = {
  _id: string;
  merchant: string;
  name: string;
  originalPrice: string;
  imageUrl: string;
};
