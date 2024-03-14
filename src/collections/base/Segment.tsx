import { StyleSheet, View } from "react-native";
import React from "react";
import Segment from "../../components/base/Segment";
import { Option } from "../../types";

const SegmentCollection = () => {
  const option: Option = { label: "Reservations", value: "reservation" };

  const options: Option[] = [
    { label: "Reservations", value: "reservation" },
    { label: "Featured Menu", value: "featured-menu" },
    { label: "Reviews", value: "reviews" },
    { label: "Details", value: "details" },
  ];

  return (
    <View>
      <Segment option={option} options={options} />
    </View>
  );
};

export default SegmentCollection;

const styles = StyleSheet.create({});
