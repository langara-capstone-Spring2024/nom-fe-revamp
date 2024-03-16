export interface AdPrice {
  label: string;
  price: number;
}

export interface AdPaylaod {
  template: number;
  headline: string;
  tagline: string;
  startDate: string;
  endDate: string;
  amount: number;
  imageUrl: string;
  primary: string;
  accent: string;
  paymentMethodId: string;
}
