import { View, Image } from "react-native";
import { RestaurantCardProps } from "./RestaurantCard.props";
import createStyles from "./RestaurantCard.style";
import React, { useMemo } from "react";
import { Card, useTheme } from "react-native-paper";
import CouponCarousel from "../CouponCarousel";
import Typography from "../Typography";
import { Rating } from "react-native-ratings";

const RestaurantCard = (props: RestaurantCardProps) => {
  const {
    imageUrl,
    restaurantName,
    cost,
    rating,
    cuisineType,
    distance,
    cityName,
    coupons,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Card contentStyle={styles.container}>
      <View style={{ paddingHorizontal: 8, gap: 8 }}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={{ paddingHorizontal: 8 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Typography color="primary">{restaurantName}</Typography>
            <View style={styles.costContainer}>
              <Typography variant="bodySm" color="accent-strong">
                {Array.from({ length: cost }, (_, index) => index + 1).map(
                  (_, index) => "$"
                )}
              </Typography>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Typography variant="bodyXs" color="subtle">
              {rating.toFixed(1)}
            </Typography>
            <Rating
              type="custom"
              ratingCount={1}
              startingValue={1}
              imageSize={16}
              tintColor="#FAFAFA"
              ratingBackgroundColor="lightgray"
              ratingColor="orange"
              readonly
            />
            <Typography variant="bodyXs" color="subtle">
              ・
            </Typography>
            <Typography variant="bodyXs" color="subtle">
              {cuisineType}
            </Typography>
            <Typography variant="bodyXs" color="subtle">
              ・
            </Typography>
            <Typography variant="bodyXs" color="subtle">
              {distance}
            </Typography>
            <Typography variant="bodyXs" color="subtle">
              ・
            </Typography>
            <Typography variant="bodyXs" color="subtle">
              {cityName}
            </Typography>
          </View>
        </View>
      </View>
      {coupons && coupons.length !== 0 && (
        <CouponCarousel coupons={coupons} onSelect={() => null} unselectable />
      )}
    </Card>
  );
};

export default RestaurantCard;
