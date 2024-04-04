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
  primary: string;
  accent: string;
  merchantId: Merchant;
  createdAt: Date;
  updatedAt: Date;
}
