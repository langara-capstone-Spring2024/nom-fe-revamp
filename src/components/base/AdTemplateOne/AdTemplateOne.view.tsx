import { View, TouchableOpacity, Image } from "react-native";
import { AdTemplateOneProps } from "./AdTemplateOne.props";
import createStyles from "./AdTemplateOne.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { TempOnePrimary, TempOneAccent } from "../SVG";

const AdTemplateOne = (props: AdTemplateOneProps) => {
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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("pressed")}
        style={{ position: "relative" }}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={[styles.image, { height: 180, width: 350, marginLeft: -40 }]}
          />
        )}
        <View
          style={{
            width: 166,
            height: 150,
            position: "absolute",
            left: 0,
            top: 15,
            zIndex: 1,
          }}>
          <TempOnePrimary fill={primary} />
        </View>
        <View
          style={{
            width: 156,
            height: 180,
            position: "absolute",
            top: 0,
            marginLeft: -48,
            // left:0,
            zIndex: 0,
          }}>
          <TempOneAccent fill={secondary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdTemplateOne;
