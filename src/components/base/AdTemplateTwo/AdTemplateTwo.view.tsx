import { View, Text, Image } from "react-native";
import { AdTemplateTwoProps } from "./AdTemplateTwo.props";
import createStyles from "./AdTemplateTwo.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { TempTwoAccent, TempTwoPrimary } from "../SVG";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";

const AdTemplateOne = (props: AdTemplateTwoProps) => {
  const {
    image,
    headline,
    tagline,
    variant,
    primary = "#FFBF41",
    secondary,
    width,
    height,
    style,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const windowWidth = useWindowDimensions().width;

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("pressed")}
      style={[styles.container, { ...style }]}>
      {image && (
        <Image
          resizeMode="cover"
          source={{ uri: image.uri }}
          style={styles.image}
        />
      )}
      <View style={styles.primary}>
        <TempTwoPrimary fill={primary} />
      </View>
      <View style={styles.secondary}>
        <TempTwoAccent fill={secondary} />
      </View>

      <Typography variant="title4" otherStyle={styles.headline}>
        {headline}
      </Typography>
      <Typography variant="bodyXs" otherStyle={styles.tagline}>
        {tagline}
      </Typography>
    </TouchableWithoutFeedback>
  );
};

export default AdTemplateOne;
