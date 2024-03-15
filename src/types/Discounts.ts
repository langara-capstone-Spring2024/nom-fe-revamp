import { Merchant } from "./Merchant";

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
  merchant: Merchant;
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

export interface DiscountV2 {
  _id: string;
  label?: string;
  description?: string;
  percentDiscount: number;
  imageUrl?: string;
  validFromTime: Date;
  validToTime: Date;
  validFromDate: Date;
  validToDate: Date;
  merchant: Merchant;
}
