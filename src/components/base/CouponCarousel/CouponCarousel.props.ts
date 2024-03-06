export interface CouponCarouselProps {
  coupons: { time: string; amount: number }[];
  index: number;
  onSelect: (index: number) => void;
}
