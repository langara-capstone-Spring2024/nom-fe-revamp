import { StyleSheet, View } from "react-native";
import React from "react";
import Ad from "../../components/base/Ad";

const AdCollection = () => {
  return (
    <View style={styles.container}>
      <Ad
        template="1"
        primary="#FFBF41"
        accent="#3C3C3C"
        headline="Nam quis inte nulla."
        tagline="Lorem ipsum dolor sit amet est officiis."
      />
      <Ad
        template="2"
        primary="#FFBF41"
        accent="#3C3C3C"
        headline="Nam quis inte nulla."
        tagline="Lorem ipsum dolor sit amet est officiis."
      />
    </View>
  );
};

export default AdCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
});
