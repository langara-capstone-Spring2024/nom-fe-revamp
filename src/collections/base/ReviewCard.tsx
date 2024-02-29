import { StyleSheet, View } from "react-native";
import React from "react";
import ReviewCard from "../../components/base/ReviewCard";

const ReviewCardCollection = () => {
  return (
    <View style={styles.container}>
      <ReviewCard
        avatarImageUrl="https://picsum.photos/360"
        userName="User"
        rating={4.3}
        content="Good!"
      />
    </View>
  );
};

export default ReviewCardCollection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
