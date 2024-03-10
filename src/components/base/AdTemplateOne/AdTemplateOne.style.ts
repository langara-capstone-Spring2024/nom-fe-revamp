import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      maxHeight: 200,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    headline: {
      position: "absolute",
      top: "20%",
      left: "10%",
      width: 122,
      zIndex: 2,
      fontFamily: "PublicSansBold",
      color: "#3C3C3C",
    },
    tagline: {
      position: "absolute",
      top: "55%",
      left: "10%",
      width: 122,
      zIndex: 2,
      fontFamily: "PublicSansBold",
      color: "#3C3C3C",
    },
  });

export default createStyles;
