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
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const windowWidth = useWindowDimensions().width;

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("pressed")}
      style={{ position: "relative" }}>
       {image && (
          <Image
            resizeMode="cover"
            source={{ uri: image.uri }}
            style={[
              styles.image,
              {
                // height: 180,
                // width: 350,
                // marginLeft: -40,
                borderRadius: 24,
              },
            ]}
          />
        )}
      {/* <View
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
          top: 8,
          marginLeft: -36,
          zIndex: 2,
        }}>
        <TempTwoAccent fill={secondary} />
      </View>
      <Typography variant="title4" otherStyle={styles.tempTwoHeadline}>
        {headline}
      </Typography>
      <Typography variant="bodyXs" otherStyle={styles.tempTwoTagline}>
        {tagline}
      </Typography> */}
    </TouchableWithoutFeedback>
  );
};

export default AdTemplateOne;
