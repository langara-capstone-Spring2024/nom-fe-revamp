import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      height: 84,
      borderTopWidth: 1,
      borderColor: t.Border["default"],
      paddingLeft: 16,
      paddingRight: 16,
    },
    titleContainer: {},
  });

export default createStyles;
