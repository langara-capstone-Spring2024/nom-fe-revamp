import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    content: {
      backgroundColor: t.Content["invert-strong"],
      paddingHorizontal: 16,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 64,
      paddingBottom: 16,
    },
    footer: {
      height: 380,
    },
  });

export default createStyles;
