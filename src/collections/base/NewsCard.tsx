import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import NewsCard from "../../components/base/NewsCard";

const NewsCardCollection = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16, gap: 24 }}
    >
      <NewsCard
        imageUrl="https://picsum.photos/360?random=1"
        title="A Quick Guide to Navigate and Leverage Our App Effectively."
      />
      <NewsCard
        imageUrl="https://picsum.photos/360?random=2"
        title="Turn Downtime into Profits: How Off-Hour Promotions Boost Your Restaurant"
      />
    </ScrollView>
  );
};

export default NewsCardCollection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: "#FAFAFA",
  },
});
