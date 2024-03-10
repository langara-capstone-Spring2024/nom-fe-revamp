import { Consumer } from "./Consumer";
import { Merchant } from "./Merchant";

export interface Rating {
  _id: string;
  rating: number;
  comment: string;
  consumer: Consumer;
  merchant: Merchant;
  createdAt: Date;
}
