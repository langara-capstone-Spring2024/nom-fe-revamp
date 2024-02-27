import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderColor: "lightgray",
      borderWidth: 1,
      borderRadius: 24,
      padding: 16,
      backgroundColor: "white",
    },
  });

export default createStyles;
