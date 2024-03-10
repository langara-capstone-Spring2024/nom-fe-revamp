import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import DishCard from "../../components/base/DishCard";

const DishCardCollection = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <DishCard
        imageUrl="https://picsum.photos/360?random=1"
        dishName="Chicken Wings"
        rating={4.7}
        cuisineType="Chicken"
        distance="3km"
        cityName="Vancouver"
        discountAmount={50}
        cost={3}
      />
      <DishCard
        imageUrl="https://picsum.photos/360?random=2"
        dishName="Beef Combo"
        rating={4.7}
        cuisineType="Japanese"
        distance="3km"
        cityName="Vancouver"
        discountAmount={30}
        cost={1}
      />
    </ScrollView>
  );
};

export default DishCardCollection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: "#FAFAFA",
  },
});
