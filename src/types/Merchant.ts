import { User } from "./User";

export interface Merchant {
  _id: string;
  name: string;
  description?: string;
  address: string;
  opening: string;
  closing: string;
  isVerified: boolean;
  user: User;
}
