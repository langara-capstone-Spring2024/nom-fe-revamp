import { User } from "./User";

export interface Consumer {
  _id: string;
  user: User;
}
