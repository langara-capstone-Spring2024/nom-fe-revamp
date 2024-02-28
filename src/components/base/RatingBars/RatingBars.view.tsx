import { View, Text } from "react-native";
import { RatingBarsProps } from './RatingBars.props';
import createStyles from './RatingBars.style';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const RatingBars = (props: RatingBarsProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text> RatingBars</Text>
    </View>
  );
};

export default RatingBars;
