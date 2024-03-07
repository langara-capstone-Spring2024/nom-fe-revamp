import { View, Text, Image } from "react-native";
import { DishCardProps } from "./DishCard.props";
import createStyles from "./DishCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { Rating } from "react-native-ratings";

const DishCard = (props: DishCardProps) => {
  const {
    imageUrl,
    dishName,
    rating,
    cuisineType,
    distance,
    cityName,
    discountAmount,
    cost,
    bordered,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Typography>{dishName}</Typography>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Typography variant="bodySm" color="subtle">
            {rating}
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
          <Typography variant="bodySm" color="subtle">
            ・
          </Typography>
          <Typography variant="bodySm" color="subtle">
            {cuisineType}
          </Typography>
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Typography variant="bodySm" color="subtle">
            {distance}
          </Typography>
          <Typography variant="bodySm" color="subtle">
            ・
          </Typography>
          <Typography variant="bodySm" color="subtle">
            {cityName}
          </Typography>
        </View>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={styles.amountContainer}>
            <Typography variant="bodySm" color="brand-medium">
              Up to {discountAmount}%
            </Typography>
          </View>
          <View style={styles.costContainer}>
            <Typography variant="bodySm" color="accent-strong">
              {Array.from({ length: cost }, (_, index) => index + 1).map(
                (_, index) => "$"
              )}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
