import { View, Text } from "react-native";
import createStyles from './Items.style';
import { ItemsGeneratedProps } from './Items.props';
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const Items = (props: ItemsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View> 
      <Text>Items</Text>
    </View>
  );
};

export default Items;