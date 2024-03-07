import { StyleSheet, View } from "react-native";
import React from "react";
import RatingScore from "../../components/base/RatingScore";

const RatingScoreCollection = () => {
  return (
    <View style={styles.container}>
      <RatingScore rating={4.6} ratingNumber={460} />
    </View>
  );
};

export default RatingScoreCollection;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
});
