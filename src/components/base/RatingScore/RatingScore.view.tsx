import { View, Text } from "react-native";
import { RatingScoreProps } from "./RatingScore.props";
import createStyles from "./RatingScore.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { Rating } from "react-native-ratings";

const RatingScore = (props: RatingScoreProps) => {
  const { rating, ratingNumber } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Typography variant="title3" weight="600">
        {rating}
      </Typography>
      <Rating
        type="custom"
        ratingCount={5}
        startingValue={rating}
        imageSize={16}
        tintColor="white"
        ratingBackgroundColor="lightgray"
        ratingColor="#E51E35"
        readonly
      />
      <Typography variant="bodyXs" color="subtle">
        {ratingNumber} Ratings
      </Typography>
    </View>
  );
};

export default RatingScore;
