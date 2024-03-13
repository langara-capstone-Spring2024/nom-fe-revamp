import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1 },
    segmentContainer: {
      marginHorizontal: -16,
      borderBottomColor: t.Border.default,
      borderBottomWidth: 1,
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    carouselContainer: {
      marginHorizontal: -16,
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
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      backgroundColor: "white",
      alignItems: "center",
      padding: 12,
      paddingBottom: 32,
      borderTopColor: t.Border.default,
      borderTopWidth: 1,
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
