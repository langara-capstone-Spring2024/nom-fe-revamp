import { View, Text, Image } from "react-native";
import { NewsCardProps } from "./NewsCard.props";
import createStyles from "./NewsCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const NewsCard = (props: NewsCardProps) => {
  const { imageUrl, title } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Typography>{title}</Typography>
      <Typography color="brand-medium">Tap to know more</Typography>
    </View>
  );
};

export default NewsCard;
