import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    itemContainer: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderStyle: "dashed",
      borderWidth: 1,
      borderRadius: 12,
    },
  });

export default createStyles;
