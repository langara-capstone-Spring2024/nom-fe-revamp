import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: t.Surface.default,
    },
    serchContainer: {
      paddingHorizontal: 16,
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
