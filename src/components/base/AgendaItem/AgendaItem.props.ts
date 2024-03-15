import { MenuItem } from "../../../screens/PromoDetails/PromoDetails.props";
export interface AgendaItemProps {
  item: ItemType;
  title: Date;
  handlePress?: (item: any) => void;
  handleButtonPress: () => void;
}

interface ItemType {
  date: string;
  startTime: string;
  endTime: string;
  discount: number;
  menuCount: number;
  discountCount: number;
  menuData: MenuItem[];
}
