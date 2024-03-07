import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 8,
    },
    itemContainer: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderColor: t.Border["brand-medium"],
      borderStyle: "dashed",
      borderWidth: 1,
      borderRadius: 12,
      backgroundColor: t.Surface["brand-subtle"],
    },
  });

export default createStyles;
