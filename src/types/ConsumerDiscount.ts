import { Consumer } from "./Consumer";
import { Discount } from "./Discounts";
import { Merchant } from "./Merchant";

export interface ConsumerDiscountV2 {
    _id: string;
    consumer: Consumer;
    discount: Discount;
    percentDiscount: number;
    qrCode: string;
    qrIdentification: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface ConsumerDiscount {
  _id: string;
  qrCode: string;
  qrIdentification: string;
  status: "upcoming" | "redeemed" | "cancelled";
  consumer: Consumer;
  merchant: Merchant;
  discount: Discount;
}
