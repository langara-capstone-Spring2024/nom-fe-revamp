import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ReviewCard from "../../components/base/ReviewCard";

const ReviewCardCollection = () => {
  const reviews = [
    <ReviewCard
      avatarImageUrl="https://picsum.photos/360?random=1"
      userName="User"
      postedDate={new Date("2024-02-26T18:30:00-08:00")}
      rating={4.5}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autea"
    />,
    <ReviewCard
      avatarImageUrl="https://picsum.photos/360?random=2"
      userName="User"
      postedDate={new Date("2024-02-27T18:30:00-08:00")}
      rating={3.8}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autea"
    />,
    <ReviewCard
      avatarImageUrl="https://picsum.photos/360?random=3"
      userName="User"
      postedDate={new Date("2024-02-28T18:30:00-08:00")}
      rating={5}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autea"
    />,
    <ReviewCard
      avatarImageUrl="https://picsum.photos/360?random=4"
      userName="User"
      postedDate={new Date("2024-02-28T18:30:00-08:00")}
      rating={1.2}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autea"
    />,
  ];

  return (
    <ScrollView
      style={styles.listContainer}
      contentContainerStyle={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      {reviews.map((review, index) => (
        <View style={styles.itemContainer} key={index}>
          {review}
        </View>
      ))}
    </ScrollView>
  );
};

export default ReviewCardCollection;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginVertical: 32,
  },
  itemContainer: {
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    paddingVertical: 16,
  },
});
