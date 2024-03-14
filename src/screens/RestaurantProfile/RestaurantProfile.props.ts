import { Merchant } from "../../types";
import { ConsumerDiscount } from "../../types/ConsumerDiscount";
import { Coupon } from "../../types/Coupon";
import { Discount } from "../../types/Discounts";
import { MenuDiscount } from "../../types/MenuDiscount";
import { Rating } from "../../types/Rating";

export interface RestaurantProfileGeneratedProps {
  isRefreshing: boolean;
  selectedCoupon: Coupon | undefined;
  merchant: Merchant | null;
  consumerDiscounts: ConsumerDiscount[];
  discounts: Discount[];
  menuDiscounts: MenuDiscount[];
  ratings: Rating[];
  handleRefresh: () => void;
  handleSelectCoupon: (coupon: Coupon) => void;
  handleNext: () => void;
}
