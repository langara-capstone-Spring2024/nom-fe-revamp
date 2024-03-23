import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CouponCarousel from "../../components/base/CouponCarousel";
import { Coupon } from "../../types/Coupon";

const CouponCarouselCollection = () => {
  const coupons: Coupon[] = [
    { time: "1:30", amount: 15 },
    { time: "2:00", amount: 15 },
    { time: "2:30", amount: 20 },
    { time: "3:00", amount: 20 },
    { time: "3:30", amount: 20 },
    { time: "4:00", amount: 15 },
    { time: "4:30", amount: 15 },
  ];

  const [selectedCoupon, setSelectedCoupon] = useState<Coupon>({
    time: "1:30",
    amount: 15,
  });

  const handleSelect = (coupon: { time: string; amount: number }) => {
    setSelectedCoupon(coupon);
  };

  return (
    <View style={styles.container}>
      <CouponCarousel
        coupon={selectedCoupon}
        coupons={coupons}
        onSelect={handleSelect}
      />
      <Text>
        Time : {selectedCoupon.time}, Amount : {selectedCoupon.amount}
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
