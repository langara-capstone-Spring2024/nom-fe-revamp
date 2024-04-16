import { User } from "./User";

export interface Consumer {
  _id: string;
  name: string;
  user: User;
}
