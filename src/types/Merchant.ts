import { User } from "./User";

export interface Merchant {
  _id: string;
  name: string;
  imageUrls: string[];
  description: string;
  address: string;
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
  cost: "1" | "2" | "3" | "4";
  openings: Date[];
  closings: Date[];
  isVerified: boolean;
  user: User;
}
