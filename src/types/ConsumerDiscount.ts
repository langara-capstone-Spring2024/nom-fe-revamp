import { Consumer } from "./Consumer";
import { Merchant } from "./Merchant";
import { Discount } from "./Discounts";

export interface ConsumerDiscount {
  _id: string;
  qrCode: string;
  qrIdentification: string;
  status: "upcoming" | "redeemed" | "cancelled";
  consumer: Consumer;
  merchant: Merchant;
  discount: Discount;
  updatedAt: Date;
}
