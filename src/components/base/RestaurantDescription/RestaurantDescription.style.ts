import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderColor: t.Border.default,
      borderWidth: 1,
      borderRadius: 16,
      padding: 16,
      backgroundColor: t.Surface.default,
    },
    header: {
      marginBottom: 16,
    },
    typography: {
      lineHeight: undefined,
    },
    nameContainer: {
      paddingBottom: 16,
    },
    addressContainer: {
      paddingVertical: 16,
      borderColor: t.Border.default,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      flexDirection: "row",
      gap: 4,
    },
    cuisineTypereservationNumberContainer: {
      paddingTop: 16,
      flexDirection: "row",
      gap: 4,
    },
    footer: {
      borderColor: t.Border.default,
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    footerItemContainer: {
      flexGrow: 1,
      alignItems: "center",
    },
    footerCenterItemContainer: {
      flexGrow: 1,
      alignItems: "center",
      borderColor: t.Border.default,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
  });

export default createStyles;
