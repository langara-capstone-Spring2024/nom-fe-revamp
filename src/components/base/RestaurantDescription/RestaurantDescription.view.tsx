import { View } from "react-native";
import { RestaurantDescriptionProps } from "./RestaurantDescription.props";
import createStyles from "./RestaurantDescription.style";
import React, { useMemo } from "react";
import { Card, useTheme } from "react-native-paper";
import Typography from "../Typography";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantDescription = (props: RestaurantDescriptionProps) => {
  const {
    name,
    address,
    cuisineType,
    reservationNumber,
    cost,
    rating,
    reviewNumber,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Card style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Typography variant="title3">{name}</Typography>
        </View>
        <View style={styles.addressContainer}>
          <Ionicons name="location-outline" size={16} color="black" />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {address}
          </Typography>
        </View>
        <View style={styles.cuisineTypereservationNumberContainer}>
          <MaterialCommunityIcons
            name="silverware-variant"
            size={16}
            color="black"
          />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {cuisineType}
          </Typography>
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={16}
            color="black"
          />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {reservationNumber} reservations
          </Typography>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItemContainer}>
          <View style={{ flexDirection: "row" }}>
            <Typography weight="700">
              {Array.from({ length: cost }, (_, index) => index + 1).map(
                (_, index) => "$"
              )}
            </Typography>
            <Typography weight="700" color="inactive">
              {Array.from({ length: 4 - cost }, (_, index) => index + 1).map(
                (_, index) => "$"
              )}
            </Typography>
          </View>
          <Typography variant="bodyXs">Cost</Typography>
        </View>
        <View style={styles.footerCenterItemContainer}>
          <Typography weight="700">{rating.toFixed(1)}</Typography>
          <Typography variant="bodyXs">Ratings</Typography>
        </View>
        <View style={styles.footerItemContainer}>
          <Typography weight="700">
            {999 < reviewNumber
              ? `${(reviewNumber / 1000).toFixed()}K+`
              : reviewNumber}
          </Typography>
          <Typography variant="bodyXs">Reviews</Typography>
        </View>
      </View>
    </Card>
  );
};

export default RestaurantDescription;
