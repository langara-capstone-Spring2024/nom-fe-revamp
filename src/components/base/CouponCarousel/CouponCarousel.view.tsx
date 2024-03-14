import { CouponCarouselProps } from "./CouponCarousel.props";
import createStyles from "./CouponCarousel.style";
import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Coupon from "../Coupon/Coupon.view";
import { Pressable } from "react-native";

const CouponCarousel = (props: CouponCarouselProps) => {
  const { coupons, onSelect = () => null, unselectable } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (index: number) => {
    setIndex(index);
    onSelect(index);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {coupons.map((coupon, itemIndex) => (
        <Pressable onPress={() => handleSelect(itemIndex)} key={itemIndex}>
          <Coupon
            time={coupon.time}
            amount={coupon.amount}
            isSelected={!unselectable && itemIndex === index ? true : false}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CouponCarousel;
