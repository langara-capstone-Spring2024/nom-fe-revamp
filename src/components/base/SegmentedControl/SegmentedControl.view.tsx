import { View, Text, TouchableOpacity } from "react-native";
import { SegmentedControlProps } from "./SegmentedControl.props";
import createStyles from "./SegmentedControl.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import { Option } from "../../../types";
import Typography from "../Typography";
import { theme as t } from "../../../utils/Theme";

const SegmentedControl = (props: SegmentedControlProps) => {
  const { option, options, onSelectOption = () => null } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionPress = (option: Option) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionPress(option)}
          style={[
            styles.segmentOption,
            {
              backgroundColor:
                option.value === selectedOption.value
                  ? t.Surface.sunken
                  : "transparent",
            },
          ]}
        >
          <View>
            <Typography
              variant="label2"
              color={
                option.value === selectedOption.value ? "info-dark" : "inactive"
              }
            >
              {option.label}
            </Typography>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SegmentedControl;
