import { View, Text } from "react-native";
import { WheelPickerProps } from "./WheelPicker.props";
import createStyles from "./WheelPicker.style";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useTheme } from "react-native-paper";
import { Picker } from "react-native-wheel-pick";

const WheelPicker = (props: WheelPickerProps) => {
  const { pickerData, selectedValue, onValueChange } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      <Picker
        style={styles.container}
        selectedValue={selectedValue}
        pickerData={pickerData}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default WheelPicker;
