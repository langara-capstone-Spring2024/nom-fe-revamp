export interface CouponCarouselProps {
  coupons: { time: string; amount: number }[];
  onSelect: (index: number) => void;
}
