import { View, Text } from "react-native";
import createStyles from "./RestaurantProfile.style";
import { RestaurantProfileGeneratedProps } from "./RestaurantProfile.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const RestaurantProfile = (props: RestaurantProfileGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text>RestaurantProfile</Text>
    </View>
  );
};

export default RestaurantProfile;
