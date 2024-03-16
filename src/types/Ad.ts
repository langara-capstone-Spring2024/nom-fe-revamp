import { Merchant } from "./Merchant";

export interface Ad {
  _id: string;
  imageUrl: string;
  template: string;
  headline: string;
  tagline: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  merchantId: Merchant;
}
