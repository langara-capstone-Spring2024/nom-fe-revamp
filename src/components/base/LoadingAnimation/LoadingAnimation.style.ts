import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },

    animation: {
      width: Dimensions.get("window").width * 0.9,
      height: Dimensions.get("window").width * 0.9,
    },
  });

export default createStyles;
