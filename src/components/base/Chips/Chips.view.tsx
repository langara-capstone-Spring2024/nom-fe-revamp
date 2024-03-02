import { View, Text } from "react-native";
import { ChipsProps } from "./Chips.props";
import createStyles from "./Chips.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const Chips = (props: ChipsProps) => {
  const { label } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Typography>{label}</Typography>
    </View>
  );
};

export default Chips;
