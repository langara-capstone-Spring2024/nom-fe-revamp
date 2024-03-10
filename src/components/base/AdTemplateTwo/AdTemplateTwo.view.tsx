import { View, Text, Image } from "react-native";
import { AdTemplateTwoProps } from "./AdTemplateTwo.props";
import createStyles from "./AdTemplateTwo.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { TempTwoAccent, TempTwoPrimary } from "../SVG";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";

const AdTemplate = (props: AdTemplateTwoProps) => {
  const {
    image,
    headline,
    tagline,
    variant,
    primary = "#FFBF41",
    secondary,
    width,
    height,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const windowWidth = useWindowDimensions().width;

  return (
    <>
      <View style={styles.container}>
        {/* {variant === 1 && (
        <>
          <View style={styles.tempOneAccent} />
          <View style={styles.tempOnePrimary} />
          <View style={styles.tempOnePrimaryRec} />
          <Typography variant="title4" otherStyle={styles.tempOneHeadline}>
            {headline}
          </Typography>
          <Typography variant="bodyXs" otherStyle={styles.tempOneTagline}>
            {tagline}
          </Typography>
        </>
      )}
      <Image source={{ uri }} style={styles.image} /> */}
        <TouchableOpacity
          onPress={() => console.log("pressed")}
          style={{ position: "relative" }}>
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={[
                styles.image,
                { height: 180, width: 350, marginLeft: -40 },
              ]}
            />
          )}
          <View
            style={{
              width: 196,
              height: 180,
              position: "absolute",
              right: 0,
              zIndex: 1,
            }}>
            <TempTwoPrimary fill={primary} />
          </View>
          <View
            style={{
              width: 340,
              height: 164,
              position: "absolute",
              top:8,
              marginLeft: -36,
              zIndex: 2,
            }}>
            <TempTwoAccent fill={secondary} />
          </View>
          <Typography variant="title4" otherStyle={styles.tempTwoHeadline}>{headline}</Typography>
          <Typography variant="bodyXs" otherStyle={styles.tempTwoTagline}>{tagline}</Typography>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AdTemplate;
