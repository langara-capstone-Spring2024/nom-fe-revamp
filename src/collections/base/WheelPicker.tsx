import { StyleSheet, View } from "react-native";
import React from "react";
import WheelPicker from "../../components/base/WheelPicker";

const WheelPickerCollection = () => {
  const pickerData = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
  ];

  return (
    <View>
      <WheelPicker pickerData={pickerData} />
    </View>
  );
};

export default WheelPickerCollection;

const styles = StyleSheet.create({});
