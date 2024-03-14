import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: t.Surface.overlay,
      borderRadius: 16,
      borderColor: t.Border["default"],
      borderWidth: 1,
    },
    headerContainer: {
      overflow: "hidden",
      //   paddingVertical: 8,
      paddingRight: 20,
      paddingLeft: 20,
      height: 53,
      display: "flex",
      justifyContent: "center",
    },
    headerContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    leftComponent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    rightComponent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    accordionList: {
      borderTopColor: t.Border.default,
      paddingRight: 20,
      paddingLeft: 20,
    },
  });

export default createStyles;
