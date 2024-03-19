import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      borderColor: t.Border.default,
      borderRadius: 100,
      overflow: "hidden",
    },
    segmentOption: {
      flex: 1,
      paddingVertical: 15,
      alignItems: "center",
      borderRightWidth: 1,
      borderRightColor: t.Border.default,
    },
  });

export default createStyles;
