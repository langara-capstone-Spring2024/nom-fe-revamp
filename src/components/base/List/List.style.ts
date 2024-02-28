import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    listWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 53,
      gap: 20,
    },
    contentWrapper: {
      flex: 1,
      height: 53,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomColor: t.Border.default,
    },
    contentRight: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });

export default createStyles;
