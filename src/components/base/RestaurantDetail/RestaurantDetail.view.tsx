import { View, Text } from "react-native";
import { RestaurantDetailProps } from "./RestaurantDetail.props";
import createStyles from "./RestaurantDetail.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Map from "../Map";
import { RestaurantDetailLocation } from "../SVG";
import Typography from "../Typography";

const RestaurantDetail = (props: RestaurantDetailProps) => {
  const { address, latitude, longitude, cuisineType, operatingTimes } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.addressContainer}>
          <RestaurantDetailLocation />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {address}
          </Typography>
        </View>
        <View style={styles.mapContainer}>
          <Map
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
          />
        </View>
      </View>
      <View>
        <Typography>Cuisine</Typography>
        <Typography color="subtle">{cuisineType}</Typography>
      </View>
      <View>
        <Typography>Operating Hours</Typography>
        {operatingTimes.map((operatingTime, operatingTimeItemIndex) => (
          <Typography color="subtle" key={operatingTimeItemIndex}>
            {days[operatingTimeItemIndex]} :{" "}
            {12 < operatingTime.openingTime.getHours()
              ? operatingTime.openingTime.getHours() - 12
              : operatingTime.openingTime.getHours()}
            :
            {10 < operatingTime.openingTime.getMinutes()
              ? operatingTime.openingTime.getMinutes()
              : "0" + operatingTime.openingTime.getMinutes()}{" "}
            {12 <= operatingTime.openingTime.getHours() ? "PM" : "AM"} -{" "}
            {12 < operatingTime.closingTime.getHours()
              ? operatingTime.closingTime.getHours() - 12
              : operatingTime.closingTime.getHours()}
            :
            {10 < operatingTime.closingTime.getMinutes()
              ? operatingTime.closingTime.getMinutes()
              : "0" + operatingTime.closingTime.getMinutes()}{" "}
            {12 <= operatingTime.closingTime.getHours() ? "PM" : "AM"}
          </Typography>
        ))}
      </View>
    </View>
  );
};

export default RestaurantDetail;
