import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "./../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    section: {
      backgroundColor: "white",
      color: "grey",
      textTransform: "uppercase",
    },
    noResultContainer: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      textAlign: "center",
    },
    dateHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: t.Content["elevation-raised"],
      borderRadius: 8,
      padding: 8,
      marginBottom: 32,
    },
    addButtonContainer: {
      display: "flex",
    },
    fixedAddButton: {
      position: "absolute",
      right: 16,
      bottom: 32,
      width: 56,
      height: 56,
      padding: 16,
      borderRadius: 16,
      backgroundColor: t.Surface["brand-light"],
      shadowColor: t.Border.default,
      shadowOpacity: 1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
    },
  });

export default createStyles;
