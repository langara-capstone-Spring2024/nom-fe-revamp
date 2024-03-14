import { Consumer } from "./Consumer";
import { Merchant } from "./Merchant";

export interface Rating {
  _id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  consumer: Consumer;
  merchant: Merchant;
  createdAt: Date;
}
