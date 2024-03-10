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
}
