import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 8,
    },
    image: {
      borderRadius: 16,
      width: "100%",
      aspectRatio: 1.9,
    },
    costContainer: {
      backgroundColor: t.Surface["accent-light"],
      paddingHorizontal: 4,
    },
  });

export default createStyles;
