import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
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
      right: 0,
      bottom: 0,
    },
    primary: {
      width: 166,
      height: 150,
      marginTop: 15,
      marginLeft: 28,
      zIndex: 1,
    },
    secondary: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
      marginLeft: -104,
    },
    headline: {
      position: "absolute",
      top: "20%",
      left: "16%",
      width: 120,
      zIndex: 2,
      fontFamily: "PublicSansBold",
      color: "#3C3C3C",
      fontSize: 19,
    },
    tagline: {
      position: "absolute",
      top: "55%",
      left: "16%",
      width: 120,
      zIndex: 2,
      color: "#3C3C3C",
    },
  });

export default createStyles;
