import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantDetail from "../../components/base/RestaurantDetail";

const RestaurantDetailCollection = () => {
  return (
    <View style={styles.container}>
      <RestaurantDetail
        address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
        latitude={49.22442010000001}
        longitude={-123.1088805}
        cuisineType="Italian"
        operatingTimes={[
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T17:00:00.000-08:00"),
          },
        ]}
      />
    </View>
  );
};

export default RestaurantDetailCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
