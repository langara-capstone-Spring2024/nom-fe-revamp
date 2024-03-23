import { CouponCarouselProps } from "./CouponCarousel.props";
import createStyles from "./CouponCarousel.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Coupon from "../Coupon/Coupon.view";
import { Pressable } from "react-native";
import { Coupon as CouponType } from "../../../types/Coupon";

const CouponCarousel = (props: CouponCarouselProps) => {
  const { coupon, coupons, onSelect = () => null, unselectable } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [selectedCoupon, setSelectedCoupon] = useState<
    | {
        time: string;
        amount: number;
      }
    | undefined
  >(coupon);

  const handleSelect = (coupon: CouponType) => {
    setSelectedCoupon(coupon);
    onSelect(coupon);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {coupons.map((couponItem, itemIndex) => (
        <Pressable onPress={() => handleSelect(couponItem)} key={itemIndex}>
          <Coupon
            time={couponItem.time}
            amount={couponItem.amount}
            isSelected={
              !unselectable &&
              selectedCoupon &&
              couponItem.time === selectedCoupon.time &&
              couponItem.amount === selectedCoupon.amount
                ? true
                : false
            }
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CouponCarousel;
