import { StyleSheet, View } from "react-native";
import React from "react";
import Coupon from "../../components/base/Coupon";

const CouponCollection = () => {
  return (
    <View style={styles.container}>
      <Coupon time="1:30" amount={30} isSelected={true} />
      <Coupon time="1:30" amount={30} isSelected={false} />
    </View>
  );
};

export default CouponCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
});
