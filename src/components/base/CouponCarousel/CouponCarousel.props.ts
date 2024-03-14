import { Coupon } from "../../../types/Coupon";

export interface CouponCarouselProps {
  coupon?: Coupon;
  coupons: Coupon[];
  onSelect?: (coupon: Coupon) => void;
  unselectable?: boolean;
}
