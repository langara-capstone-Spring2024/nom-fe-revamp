import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: "relative",
      maxHeight: 200,
      // height: 180,
      // width: 350,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    headline: {
      position: "absolute",
      top: "20%",
      left: "4%",
      width: 112,
      zIndex: 2,
      fontFamily: "PublicSansBold",
      color: "#3C3C3C",
      fontSize: 19,
    },
    tagline: {
      position: "absolute",
      top: "55%",
      left: "4%",
      width: 112,
      zIndex: 2,
      color: "#3C3C3C",
    },
  });

export default createStyles;
