import { Discount } from "./Discounts";
import { Menu } from "./Menus";
import { Merchant } from "./Merchant";

export interface MenuDiscount {
  menu: Menu;
  discount: Discount;
  merchant: Merchant;
}
