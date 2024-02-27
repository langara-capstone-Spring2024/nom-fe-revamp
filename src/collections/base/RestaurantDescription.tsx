import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantDescription from "../../components/base/RestaurantDescription";
import { Merchant } from "../../types";

const RestaurantDescriptionCollection = () => {
  const merchant: Merchant = {
    _id: "65de1e7eb9cb6c93fed125ee",
    name: "Merchant",
    description: "Description",
    address: "Langara College, West 49th Avenue, Vancouver, BC, Canada",
    opening: "",
    closing: "",
    isVerified: true,
    user: {
      _id: "65de1e6db9cb6c93fed125eb",
      email: "merchant@test.com",
      image: "https://picsum.photos/360",
    },
  };

  return (
    <View>
      <RestaurantDescription merchant={merchant} />
    </View>
  );
};

export default RestaurantDescriptionCollection;

const styles = StyleSheet.create({});
