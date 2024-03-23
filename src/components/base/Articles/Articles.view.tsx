import { View, Text, Image } from "react-native";
import { ArticlesProps } from "./Articles.props";
import createStyles from "./Articles.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const Articles = (props: ArticlesProps) => {
  const { title, link, imgSrc } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={imgSrc} />
      </View>
      <Typography>{title}</Typography>
      <Typography variant="bodyXs" color="brand-medium">
        {link}
      </Typography>
    </View>
  );
};

export default Articles;
