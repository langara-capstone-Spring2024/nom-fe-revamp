import { View, Text } from "react-native";
import createStyles from "./Order.style";
import { OrderGeneratedProps } from "./Order.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import ExpandableCalendarComponent from "../../components/base/ExpandableCalendarComponent";
import { SegmentedButtons } from "react-native-paper";

const Order = (props: OrderGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [value, onValueChange] = React.useState("upcoming");

  const handleValueChange = (newValue: string) => {
    onValueChange(newValue);
    console.log(newValue);
  };

  return (
    <View>
      <View style={styles.segmentedBtnContainer}>
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
      </View>
    </View>
  );
};

export default Order;
