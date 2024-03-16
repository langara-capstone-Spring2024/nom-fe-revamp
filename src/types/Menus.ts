import { Merchant } from "./Merchant";

export interface Menus {
  _id: string;
  name: string;
  originalPrice: string;
  imageUrl: string;
  description: string;
}

export interface Menu {
  _id: string;
  imageUrl: string;
  name: string;
  originalPrice: number;
  description: string;
  cuisineType:
    | "American"
    | "Chinese"
    | "Indian"
    | "Italian"
    | "Japanese"
    | "Korean"
    | "Mexican"
    | "Thai"
    | "Others";
  merchant: Merchant;
}
