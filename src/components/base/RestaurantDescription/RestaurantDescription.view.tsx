import { View } from "react-native";
import { RestaurantDescriptionProps } from "./RestaurantDescription.props";
import createStyles from "./RestaurantDescription.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

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
      <View style={{ marginBottom: 16 }}>
        <View
          style={{
            paddingBottom: 16,
          }}
        >
          <Typography variant="title3">{name}</Typography>
        </View>
        <View
          style={{
            paddingVertical: 16,
            borderColor: "lightgray",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
          }}
        >
          <Typography variant="bodySm">{address}</Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 16,
          }}
        >
          <Typography variant="bodySm">{cuisineType}</Typography>
          <Typography variant="bodySm">・</Typography>
          <Typography variant="bodySm">
            {reservationNumber} reservations
          </Typography>
        </View>
      </View>
      <View
        style={[
          styles.container,
          {
            borderRadius: 16,
            padding: undefined,
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: "center" }}>
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
        </View>
        <View
          style={{
            borderColor: "lightgray",
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            flexGrow: 1,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Typography weight="700">{rating}</Typography>
            <Typography variant="bodyXs">Ratings</Typography>
          </View>
        </View>
        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Typography weight="700">
              {999 < reviewNumber
                ? `${(reviewNumber / 1000).toFixed()}K+`
                : reviewNumber}
            </Typography>
            <Typography variant="bodyXs">Reviews</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDescription;
