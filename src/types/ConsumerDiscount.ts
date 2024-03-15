import { Consumer } from "./Consumer";
import { DiscountV2 } from "./Discounts";
import { Merchant } from "./Merchant";

export interface ConsumerDiscount {
  _id: string;
  qrCode: string;
  qrIdentification: string;
  status: "upcoming" | "redeemed" | "cancelled";
  consumer: Consumer;
  merchant: Merchant;
  discount: DiscountV2;
  updatedAt: Date;
}
