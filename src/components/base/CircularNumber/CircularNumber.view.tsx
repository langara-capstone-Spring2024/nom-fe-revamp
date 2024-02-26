import { View, Text } from "react-native";
import { CircularNumberProps } from "./CircularNumber.props";
import createStyles from "./CircularNumber.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const CircularNumber = (props: CircularNumberProps) => {
  const { number } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);
  return (
    <View>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

export default CircularNumber;
