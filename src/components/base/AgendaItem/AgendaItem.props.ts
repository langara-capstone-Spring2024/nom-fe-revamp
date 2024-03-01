export interface AgendaItemProps {
  item: ItemType;
}

interface ItemType {
  date: string;
  startTime: string;
  endTime: string;
  discount: number;
  menuCount: number;
  discountCount: number;
}
