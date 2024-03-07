import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { gap: 8 },
    image: {
      borderRadius: 12,
      width: "100%",
      aspectRatio: 2.2,
    },
  });

export default createStyles;
