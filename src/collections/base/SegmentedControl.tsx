import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SegmentedControl from "../../components/base/SegmentedControl";
import { Option } from "../../types";

const SegmentedControlCollection = () => {
  const option: Option = { label: "Today", value: "today" };

  const options: Option[] = [
    { label: "Today", value: "today" },
    { label: "Monthly", value: "monthly" },
  ];

  return (
    <View>
      <SegmentedControl options={options} option={option} />
    </View>
  );
};

export default SegmentedControlCollection;

const styles = StyleSheet.create({});
