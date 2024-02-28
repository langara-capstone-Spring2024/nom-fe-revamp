import { View, Text } from "react-native";
import createStyles from './Activity.style';
import { ActivityGeneratedProps } from './Activity.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Activity = (props: ActivityGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;