import { Menu } from "./Menus";

export interface Discounts {
  label?: string;
  description?: string;
  percentDiscount: number;
  imageUrl?: string;
  validFromTime: string;
  validToTime: string;
  validFromDate: string;
  validToDate: string;
}

export interface Discount {
  _id: string;
  label?: string;
  description?: string;
  percentDiscount: number;
  imageUrl?: string;
  validFromTime: string;
  validToTime: string;
  validFromDate: string;
  validToDate: string;
  menuIds: Menu[];
}

export interface FormattedDiscount {
  title: Date;
  data: {
    title: string;
    startTime: string;
    endTime: string;
    discount: number;
    menuCount: number;
  }[];
}
