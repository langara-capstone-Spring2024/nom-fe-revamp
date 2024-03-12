import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    itemContainer: {
      flex: 1,
    },
    itemList: {
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    itemButton: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: t.Content["invert-strong"],
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
    },
  });

export default createStyles;
