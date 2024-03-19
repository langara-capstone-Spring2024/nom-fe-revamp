import { StyleSheet, View } from "react-native";
import React from "react";
import Articles from "../../components/base/Articles";
import Article1 from "../../../assets/Article1.png";

const ArticlesCollection = () => {
  return (
    <View>
      <Articles
        title={"A Quick Guide to Navigate and Leverage Our\nApp Effectively."}
        imgSrc={Article1}
        link="Tap to know more"
      />
    </View>
  );
};

export default ArticlesCollection;

const styles = StyleSheet.create({});
