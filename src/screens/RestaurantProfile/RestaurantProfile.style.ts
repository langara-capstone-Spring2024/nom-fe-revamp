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
    ratingContainer: {
      flexDirection: "row",
      gap: 48,
      alignItems: "center",
    },
    divider: {
      backgroundColor: t.Border.default,
      width: 1,
      alignSelf: "stretch",
    },
    reviewContainer: {
      borderTopColor: t.Border.default,
      borderTopWidth: 1,
      paddingVertical: 16,
    },
    sectionContainer: {
      padding: 16,
      backgroundColor: t.Surface.default,
      gap: 32,
    },
    sectionBodyContainer: {
      gap: 16,
    },
  });

export default createStyles;
