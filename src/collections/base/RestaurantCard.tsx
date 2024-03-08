import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import RestaurantCard from "../../components/base/RestaurantCard";

const RestaurantCardCollection = () => {
  const coupons: { time: string; amount: number }[] = [
    { time: "1:30", amount: 15 },
    { time: "2:00", amount: 15 },
    { time: "2:30", amount: 20 },
    { time: "3:00", amount: 20 },
    { time: "3:30", amount: 20 },
    { time: "4:00", amount: 15 },
    { time: "4:30", amount: 15 },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16, gap: 32 }}
    >
      <RestaurantCard
        imageUrl="https://picsum.photos/360?random=1"
        restaurantName="Nomnom Bites"
        cost={2}
        rating={4.7}
        cuisineType="Fusion"
        distance="1.5km"
        cityName="Vancouver"
        coupons={coupons}
      />
      <RestaurantCard
        imageUrl="https://picsum.photos/360?random=2"
        restaurantName="Coffee Bear"
        cost={3}
        rating={4.2}
        cuisineType="Cafe"
        distance="3km"
        cityName="Vancouver"
        coupons={coupons}
      />
      <RestaurantCard
        imageUrl="https://picsum.photos/360?random=3"
        restaurantName="Sushi Palace"
        cost={3}
        rating={4.7}
        cuisineType="Japanese"
        distance="3.1km"
        cityName="Vancouver"
        coupons={coupons}
      />
    </ScrollView>
  );
};

export default RestaurantCardCollection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: "#FAFAFA",
  },
});
