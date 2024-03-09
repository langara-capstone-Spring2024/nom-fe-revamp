import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: t.Surface.default,
    },
    serchContainer: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: t.Surface.default,
    },
    titleContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listContainer: {
      paddingHorizontal: 16,
      gap: 16,
    },
  });

export default createStyles;
