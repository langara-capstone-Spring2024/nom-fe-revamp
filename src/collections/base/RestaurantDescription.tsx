import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import RestaurantDescription from "../../components/base/RestaurantDescription";

const RestaurantDescriptionCollection = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <RestaurantDescription
        name="Restaurant"
        address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
        cuisineType="Japanese"
        reservationNumber={473}
        cost={1}
        rating={4.6}
        reviewNumber={2448}
      />
      <RestaurantDescription
        name="Restaurant"
        address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
        cuisineType="Japanese"
        reservationNumber={473}
        cost={2}
        rating={4.6}
        reviewNumber={1000}
      />
      <RestaurantDescription
        name="Restaurant"
        address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
        cuisineType="Japanese"
        reservationNumber={473}
        cost={3}
        rating={4.6}
        reviewNumber={600}
      />
      <RestaurantDescription
        name="Restaurant"
        address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
        cuisineType="Japanese"
        reservationNumber={473}
        cost={4}
        rating={4.6}
        reviewNumber={10}
      />
    </ScrollView>
  );
};

export default RestaurantDescriptionCollection;

const styles = StyleSheet.create({});
