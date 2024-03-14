import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    itemContainer: { flexDirection: "row", gap: 8, alignItems: "center" },
    numberContainer: {
      width: 16,
      alignItems: "center",
    },
    barContainer: {
      flex: 1,
      height: 8,
    },
    bar: {
      position: "absolute",
      height: 8,
      borderRadius: 8,
    },
  });

export default createStyles;
