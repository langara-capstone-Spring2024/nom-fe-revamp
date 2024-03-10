import { View, Text, Image } from "react-native";
import { AdTemplateProps } from "./AdTemplate.props";
import createStyles from "./AdTemplate.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { TempTwoAccent, TempTwoPrimary } from "../SVG";
import { TouchableOpacity } from "react-native-gesture-handler";

const AdTemplate = (props: AdTemplateProps) => {
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
        <TouchableOpacity onPress={() => console.log('pressed')}>
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={[
                styles.image,
                { height: 200, width: 350, marginLeft: -40 },
              ]}
            />
          )}
        </TouchableOpacity>
        <View
          style={[styles.overlay, { position: "absolute", top: 0, right: 0 }]}>
          <TempTwoPrimary width={216} height={200} fill={primary} />
          <Typography variant="title4" otherStyle={styles.tempTwoHeadline}>
            {headline}
          </Typography>
          <Typography variant="bodyXs" otherStyle={styles.tempTwoTagline}>
            {tagline}
          </Typography>
        </View>
        <View
          style={[
            styles.overlay,
            {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [{ translateX: -190 }, { translateY: -92 }],
              zIndex: 2,
            },
          ]}>
          <TempTwoAccent width={310} height={184} fill={secondary} />
        </View>
      </View>
    </>
  );
};

export default AdTemplate;
