import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    promoDetailsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
    promoMain: {
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    promoFooter: {
      backgroundColor: t.Content["invert-strong"],
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
    },
  });

export default createStyles;
