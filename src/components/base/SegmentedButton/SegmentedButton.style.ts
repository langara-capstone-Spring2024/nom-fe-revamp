import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      //   flex: 1,
      alignItems: "center",
    },

    button: {
      borderColor: t.Border.default,
      //   backgroundColor: "white",
      //   color: "black",
    },

    checkedButton: {
      backgroundColor: "white",
      borderColor: t.Border.default,
      //   color: "black",
    },

    checkedLabel: {
      color: "#222222",
      fontSize: 14,
      lineHeight: 16,
    },

    label: {
      color: "#939393",
      fontSize: 14,
      lineHeight: 16,
    },
  });

export default createStyles;
