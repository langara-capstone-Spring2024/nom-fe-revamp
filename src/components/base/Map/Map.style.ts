import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
      borderRadius: 16,
    },
    home: {
      position: "absolute",
      top: 10,
      right: 10,
      padding: 8,
      aspectRatio: 1,
      borderRadius: 8,
      backgroundColor: "lightgray",
    },
  });

export default createStyles;
