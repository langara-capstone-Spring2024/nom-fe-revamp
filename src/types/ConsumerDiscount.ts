import { Consumer } from "./Consumer";
import { Discount } from "./Discounts";

export interface ConsumerDiscount {
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