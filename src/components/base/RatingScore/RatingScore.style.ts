import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: "flex-start",
      backgroundColor: t.Content["white-strong"],
      gap: 4,
    },
  });

export default createStyles;
