import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 16,
      alignItems: "flex-start",
    },
    headerContainer: {
      flexDirection: "row",
      gap: 16,
    },
  });

export default createStyles;
