import { Consumer } from "./Consumer";
import { Discount } from "./Discounts";

export interface ConsumerDiscount {
  _id: string;
  qrCode: string;
  qrIdentification: string;
  status: "upcoming" | "redeemed" | "cancelled";
  consumer: Consumer;
  discount: Discount;
}
