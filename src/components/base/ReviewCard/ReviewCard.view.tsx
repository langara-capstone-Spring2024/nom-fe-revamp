import { View, Text } from "react-native";
import { ReviewCardProps } from "./ReviewCard.props";
import createStyles from "./ReviewCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import UserAvatar from "../UserAvatar";
import Typography from "../Typography";
import { Rating, AirbnbRating } from "react-native-ratings";

const ReviewCard = (props: ReviewCardProps) => {
  const { avatarImageUrl, userName, rating, content } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <UserAvatar sizing="large" />
        <View>
          <Typography>{userName}</Typography>
        </View>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default ReviewCard;
