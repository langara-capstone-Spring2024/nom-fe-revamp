import { View, TouchableOpacity, Image } from "react-native";
import { AdTemplateThreeProps } from "./AdTemplateThree.props";
import createStyles from "./AdTemplateThree.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { TempThreePrimary, TempOneAccent, TempThreeAccent } from "../SVG";
import Typography from "../Typography";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const AdTemplateThree = (props: AdTemplateThreeProps) => {
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
        {/* <TempThreePrimary fill={primary} /> */}
      </View>
      <View style={styles.secondary}>
        <TempThreeAccent fill={secondary} />
      </View>
      {/* <Typography variant="title4" otherStyle={styles.headline}>
        {headline}
      </Typography>
      <Typography variant="bodyXs" otherStyle={styles.tagline}>
        {tagline}
      </Typography> */}
    </TouchableWithoutFeedback>
  );
};

export default AdTemplateThree;
