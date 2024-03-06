import { CouponCarouselProps } from "./CouponCarousel.props";
import createStyles from "./CouponCarousel.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Coupon from "../Coupon/Coupon.view";
import { Pressable } from "react-native";

const CouponCarousel = (props: CouponCarouselProps) => {
  const { coupons, index, onSelect } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {coupons.map((coupon, itemIndex) => (
        <Pressable onPress={() => onSelect(itemIndex)} key={itemIndex}>
          <Coupon
            time={coupon.time}
            amount={coupon.amount}
            isSelected={itemIndex === index ? true : false}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CouponCarousel;
