import { View, Text, Image } from "react-native";
import { AdTemplateThreeProps } from "./AdTemplateThree.props";
import createStyles from "./AdTemplateThree.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { TempThreeAccent, TempThreePrimary } from "../SVG";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";

const AdTemplateOne = (props: AdTemplateThreeProps) => {
  const {
    image,
    headline,
    tagline,
    primary = "#FFBF41",
    secondary,
    width,
    height,
    style,
    onSelectTemplate
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const windowWidth = useWindowDimensions().width;

  return (
    <TouchableWithoutFeedback
      onPress={() => onSelectTemplate(2)}
      style={[styles.container, { ...style }]}>
      {image && (
        <Image
          resizeMode="cover"
          source={{ uri: image.uri }}
          style={styles.image}
        />
      )}
      <View style={styles.primary}>
        <TempThreePrimary fill={primary} />
      </View>
      <View style={styles.secondary}>
        <TempThreeAccent fill={secondary} />
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
