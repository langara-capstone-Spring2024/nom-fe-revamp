export interface AgendaItemProps {
  item: ItemType;
  handlePress?: () => void;
  handleButtonPress: () => void;
}

interface ItemType {
  date: string;
  startTime: string;
  endTime: string;
  discount: number;
  menuCount: number;
  discountCount: number;
}
