import { StyleSheet, View } from "react-native";
import React from "react";
import MerchantDashboard from "../../components/base/MerchantDashboard";

const MerchantDashboardCollection = () => {
  return (
    <View>
      <MerchantDashboard
        couponSoldToday={"36"}
        totalSold={"2.34k"}
        ratings={"4.6"}
        performance={"+7.3%"}
      />
    </View>
  );
};

export default MerchantDashboardCollection;

const styles = StyleSheet.create({});
