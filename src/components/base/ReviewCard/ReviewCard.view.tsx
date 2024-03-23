import { View } from "react-native";
import { ReviewCardProps } from "./ReviewCard.props";
import createStyles from "./ReviewCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import UserAvatar from "../UserAvatar";
import Typography from "../Typography";
import { Rating } from "react-native-ratings";

const ReviewCard = (props: ReviewCardProps) => {
  const { avatarImageUrl, userName, postedDate, rating, content } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const getDays = (targetDate: Date) => {
    return (
      Math.ceil(
        (targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      ) * -1
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <UserAvatar source={avatarImageUrl} sizing="large" />
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Typography>{userName}</Typography>
          <Typography variant="bodyXs" color="subtle">
            {getDays(postedDate) === 0
              ? `today`
              : getDays(postedDate) === 1
              ? `${getDays(postedDate)} day ago`
              : `${getDays(postedDate)} days ago`}
          </Typography>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={rating}
            imageSize={16}
            tintColor="#FAFAFA"
            ratingBackgroundColor="lightgray"
            ratingColor="orange"
            readonly
          />
        </View>
      </View>
      <Typography color="subtle">{content}</Typography>
    </View>
  );
};

export default ReviewCard;
