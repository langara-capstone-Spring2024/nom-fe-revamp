import { View, Text } from "react-native";
import { RestaurantDetailProps } from "./RestaurantDetail.props";
import createStyles from "./RestaurantDetail.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Map from "../Map";

const RestaurantDetail = (props: RestaurantDetailProps) => {
  const { address, latitude, longitude } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      <Map
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      />
    </View>
  );
};

export default RestaurantDetail;
