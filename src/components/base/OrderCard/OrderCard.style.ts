import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: "#fff",
      borderColor: t.Border["default"],
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 16,
      paddingLeft: 16,
    },
    topContainer: {
      paddingBottom: 16,
    },
    middleContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: t.Border["default"],
      borderBottomColor: t.Border["default"],
      flexDirection: "row",
      //   justifyContent: "space-between",
      gap: 65,
      paddingTop: 16,
      paddingBottom: 16,
    },
    firstRow: {
      marginBottom: 8,
    },
    bottomContainer: {
      flexDirection: "row",
      //   justifyContent: "space-between",
      gap: 75,
      paddingTop: 16,
    },
  });

export default createStyles;
