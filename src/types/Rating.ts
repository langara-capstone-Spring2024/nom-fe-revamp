import { Merchant } from "./Merchant";

export interface Rating {
  _id: string;
  rating: number;
  comment: string;
  merchant: Merchant;
}
