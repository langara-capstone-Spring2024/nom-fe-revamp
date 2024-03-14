import { Consumer } from "./Consumer";
import { Discount } from "./Discounts";
import { Merchant } from "./Merchant";

export interface ConsumerDiscount {
  _id: string;
  qrCode: string;
  qrIdentification: string;
  status: "upcoming" | "redeemed" | "cancelled";
  consumer: Consumer;
  merchant: Merchant;
  discount: Discount;
}
