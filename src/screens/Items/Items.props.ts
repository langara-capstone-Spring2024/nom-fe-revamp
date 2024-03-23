import { MenuItem } from "../PromoDetails/PromoDetails.props";
export interface ItemsGeneratedProps {
  allMenu: any[];
  handleSelectMenu: (menuId: MenuItem) => void;
  selectedMenuIds: MenuItem[];
  handleSave: () => void;
}
