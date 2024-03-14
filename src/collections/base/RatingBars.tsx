import { StyleSheet, View } from "react-native";
import React from "react";
import RatingBars from "../../components/base/RatingBars";

const RatingBarsCollection = () => {
  return (
    <View style={styles.container}>
      <RatingBars ratingNumbers={[10, 4, 3, 2, 5]} />
    </View>
  );
};

export default RatingBarsCollection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 64,
  },
});
