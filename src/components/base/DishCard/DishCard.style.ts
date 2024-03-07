import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 16,
      backgroundColor: t.Surface.default,
    },
    imageContainer: {
      flex: 3,
      aspectRatio: 1,
    },
    image: {
      borderRadius: 24,
      width: "100%",
      height: "100%",
    },
    contentContainer: {
      flex: 7,
      gap: 4,
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: t.Border.default,
    },
    amountContainer: {
      backgroundColor: t.Surface["brand-light"],
      paddingHorizontal: 4,
    },
    costContainer: {
      backgroundColor: t.Surface["accent-light"],
      paddingHorizontal: 4,
    },
  });

export default createStyles;
