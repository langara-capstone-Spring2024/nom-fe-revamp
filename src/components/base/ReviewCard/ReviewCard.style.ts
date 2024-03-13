import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 8,
      alignItems: "flex-start",
      backgroundColor: t.Surface.default,
    },
    headerContainer: {
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
    },
  });
export default createStyles;
