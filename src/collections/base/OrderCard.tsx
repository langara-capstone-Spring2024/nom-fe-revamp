import { StyleSheet, View } from "react-native";
import React from "react";
import OrderCard from "../../components/base/OrderCard";

const OrderCardCollection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orderCardContainer}>
        <OrderCard
          customerName="John Doe"
          couponNo="123456"
          discount={10}
          date={new Date()}
          status="Upcoming"
          operation={new Date()}
          validFromTime={new Date()}
          validToTime={new Date()}
        />
      </View>
      <View>
        <OrderCard
          customerName="William H"
          couponNo="321313"
          discount={20}
          date={new Date()}
          status="Redeemed"
          operation={new Date()}
          validFromTime={new Date()}
          validToTime={new Date()}
        />
      </View>
    </View>
  );
};

export default OrderCardCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "space-evenly",
    display: "flex",
  },
  orderCardContainer: {
    marginBottom: 10,
  },
});
