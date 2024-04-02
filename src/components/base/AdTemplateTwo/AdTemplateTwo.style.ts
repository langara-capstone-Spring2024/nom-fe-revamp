import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const windowWidth = Dimensions.get("window").width;

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
      right: 117,
      bottom: 0,
    },
    primary: {
      marginLeft: 155,
      zIndex: 0,
    },
    secondary: {
      position: "absolute",
      width: "95%",
      height: "95%",
      marginLeft: 9,
      marginTop: 5,
      zIndex: 99,
    },
    headline: {
      position: "absolute",
      top: "25%",
      right: "8%",
      zIndex: 3,
      width: 130,
      height: 48,
      fontFamily: "PublicSansBold",
      textAlign: "right",
      fontSize: 18,
      color,
    },
    tagline: {
      position: "absolute",
      top: "50%",
      right: "8%",
      zIndex: 3,
      width: 100,
      textAlign: "right",
      fontSize: 9,
      color,
    },
  });

export default createStyles;
