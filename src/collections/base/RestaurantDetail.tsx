import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantDetail from "../../components/base/RestaurantDetail";

const RestaurantDetailCollection = () => {
  return (
    <ScrollView>
      <View>
        <RestaurantDetail
          address="Langara College, West 49th Avenue, Vancouver, BC, Canada"
          latitude={49.22442010000001}
          longitude={-123.1088805}
        />
        <Text>Text</Text>
      </View>
    </ScrollView>
  );
};

export default RestaurantDetailCollection;

const styles = StyleSheet.create({});
