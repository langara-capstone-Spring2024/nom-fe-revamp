import { Merchant } from "../../types";
import { Discount } from "../../types/Discounts";
import { Rating } from "../../types/Rating";

export interface RestaurantProfileGeneratedProps {
  isRefreshing: boolean;
  merchant: Merchant | null;
  discounts: Discount[];
  ratings: Rating[];
  handleRefresh: () => void;
}
