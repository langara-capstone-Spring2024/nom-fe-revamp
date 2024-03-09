export interface Discounts {
  _id: string;
  label?: string;
  description?: string;
  percentDiscount: { $numberDecimal: string };
  imageUrl?: string;
  validFromTime: string;
  validToTime: string;
  validFromDate: string;
  validToDate: string;
}

export interface Discount {
  _id: string;
  label?: string;
  description?: string;
  percentDiscount: number;
  imageUrl?: string;
  validFromTime: string;
  validToTime: string;
  validFromDate: string;
  validToDate: string;
}

export interface FormattedDiscount {
  title: Date;
  data: {
    title: string;
    startTime: string;
    endTime: string;
    discount: number;
    menuCount: number;
  }[];
}
