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
  });

export default createStyles;
