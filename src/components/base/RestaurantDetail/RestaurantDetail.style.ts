import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 16,
      backgroundColor: t.Surface.default,
    },
    addressContainer: {
      flexDirection: "row",
      gap: 4,
    },
    mapContainer: {
      width: "100%",
      aspectRatio: 2,
    },
    typography: {
      flex: 1,
      lineHeight: undefined,
    },
  });

export default createStyles;
