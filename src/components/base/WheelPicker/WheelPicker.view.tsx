import { View, Text } from "react-native";
import { WheelPickerProps } from "./WheelPicker.props";
import createStyles from "./WheelPicker.style";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useTheme } from "react-native-paper";
import { Picker } from "react-native-wheel-pick";

const WheelPicker = (props: WheelPickerProps) => {
  const { pickerData, updateLabel } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const selectedValueRef = useRef<string | undefined>(pickerData[0]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    pickerData[0]
  );

  const onValueChange = (value: any) => {
    selectedValueRef.current = value;
    setSelectedValue(value);
    if (updateLabel) {
      updateLabel(value);
    }
  };

  useEffect(() => {
    setSelectedValue(selectedValueRef.current);
  }, [pickerData]);

  console.log("selectedValue: ", selectedValue);
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
