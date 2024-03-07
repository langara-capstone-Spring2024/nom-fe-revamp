import { View, Text, SafeAreaView } from "react-native";
import { SegmentedButtonProps } from "./SegmentedButton.props";
import createStyles from "./SegmentedButton.style";
import React, { useMemo } from "react";
import { useTheme, SegmentedButtons } from "react-native-paper";
import Typography from "../Typography";

const SegmentedButton = (props: SegmentedButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [value, onValueChange] = React.useState("upcoming");

  const handleValueChange = (newValue: string) => {
    onValueChange(newValue);
    console.log(newValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={[
          {
            value: "upcoming",
            label: "Upcoming",
            style: value === "upcoming" ? styles.checkedButton : styles.button,
            labelStyle:
              value === "upcoming" ? styles.checkedLabel : styles.label,
          },
          {
            value: "history",
            label: "History",
            style: value === "history" ? styles.checkedButton : styles.button,
            labelStyle:
              value === "history" ? styles.checkedLabel : styles.label,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default SegmentedButton;
