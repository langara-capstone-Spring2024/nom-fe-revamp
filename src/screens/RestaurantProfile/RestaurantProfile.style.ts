import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1 },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    reviewContainer: {
      borderTopColor: t.Border.default,
      borderTopWidth: 1,
      paddingVertical: 32,
    },
    sectionContainer: {
      backgroundColor: t.Surface.default,
    },
    titleContainer: {
      paddingVertical: 32,
      paddingHorizontal: 16,
    },
  });

export default createStyles;
