import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Chips from "../../components/base/Chips";

const ChipsCollection = () => {
  return (
    <View
      style={{ backgroundColor: "white", paddingVertical: 20, height: "100%" }}
    >
      <Chips label="April 23, 2024" style={{ width: 50 }}/>
    </View>
  );
};

export default ChipsCollection;

const styles = StyleSheet.create({});
