import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme, color: string) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 24,
      overflow: "hidden",
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 140,
      bottom: 10,
    },
    primary: {},
    secondary: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
      marginLeft: -10,
    },
    headline: {
      position: "absolute",
      top: "20%",
      right: "6%",
      width: 120,
      zIndex: 2,
      fontFamily: "PublicSansBold",
      fontSize: 19,
      color,
    },
    tagline: {
      position: "absolute",
      top: "55%",
      right: "6%",
      width: 120,
      zIndex: 2,
      color,
    },
  });

export default createStyles;
