import { Merchant } from "../../types";
import { Rating } from "../../types/Rating";

export interface RestaurantProfileGeneratedProps {
  isRefreshing: boolean;
  merchant: Merchant | null;
  ratings: Rating[];
  handleRefresh: () => void;
}
