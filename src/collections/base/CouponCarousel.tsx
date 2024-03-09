import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CouponCarousel from "../../components/base/CouponCarousel";

const CouponCarouselCollection = () => {
  const coupons: { time: string; amount: number }[] = [
    { time: "1:30", amount: 15 },
    { time: "2:00", amount: 15 },
    { time: "2:30", amount: 20 },
    { time: "3:00", amount: 20 },
    { time: "3:30", amount: 20 },
    { time: "4:00", amount: 15 },
    { time: "4:30", amount: 15 },
  ];

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (index: number) => {
    setIndex(index);
  };

  return (
    <View style={styles.container}>
      <CouponCarousel coupons={coupons} onSelect={handleSelect} />
      <Text>
        Time : {coupons[index].time}, Amount : {coupons[index].amount}
      </Text>
    </View>
  );
};

export default CouponCarouselCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
