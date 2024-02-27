import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantProfile from "../../components/module/RestaurantProfile";
import { Merchant } from "../../types";

const RestaurantProfileCollection = () => {
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
      <RestaurantProfile merchant={merchant} />
    </View>
  );
};

export default RestaurantProfileCollection;

const styles = StyleSheet.create({});
