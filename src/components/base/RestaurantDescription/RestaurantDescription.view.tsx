import { View } from "react-native";
import { RestaurantDescriptionProps } from "./RestaurantDescription.props";
import createStyles from "./RestaurantDescription.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import {
  RestaurantDescriptionCoupon,
  RestaurantDescriptionCutlery,
  RestaurantDescriptionLocation,
} from "../../../svgs";
import { SvgXml } from "react-native-svg";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Typography variant="title3">{name}</Typography>
        </View>
        <View style={styles.addressContainer}>
          <SvgXml xml={RestaurantDescriptionLocation} />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {address}
          </Typography>
        </View>
        <View style={styles.cuisineTypereservationNumberContainer}>
          <SvgXml xml={RestaurantDescriptionCutlery} />
          <Typography variant="bodySm" otherStyle={styles.typography}>
            {cuisineType}
          </Typography>
          <Typography variant="bodySm">・</Typography>
          <SvgXml xml={RestaurantDescriptionCoupon} />
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
          <Typography weight="700">{rating}</Typography>
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
    </View>
  );
};

export default RestaurantDescription;