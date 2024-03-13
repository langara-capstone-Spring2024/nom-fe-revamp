import { View, Text } from "react-native";
import { RestaurantDetailProps } from "./RestaurantDetail.props";
import createStyles from "./RestaurantDetail.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";

const RestaurantDetail = (props: RestaurantDetailProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text> RestaurantDetail</Text>
    </View>
  );
};

export default RestaurantDetail;
