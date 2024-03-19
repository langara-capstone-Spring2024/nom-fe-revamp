import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    imageWrapper: {},
  });

export default createStyles;
