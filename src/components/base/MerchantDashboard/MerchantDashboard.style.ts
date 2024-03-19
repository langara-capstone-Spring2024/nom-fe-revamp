import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: t.Surface.default,
      borderRadius: 24,
    },
    contentWrapper: {
      borderRadius: 24,
      overflow: "hidden",
    },
    headerBg: {
      borderRadius: 24,
    },
    content: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    metrics: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    topMetric: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      paddingTop: 16,
      paddingBottom: 8,
    },
    bottomMetrics: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      borderTopWidth: 1,
      borderTopColor: t.Border.default,
      paddingTop: 8,
    },
    metric: {
      display: "flex",
      alignItems: "center",
      gap: 4,
    },
    withBorder: {
      borderRightWidth: 1,
      borderRightColor: t.Border.default,
    },
  });

export default createStyles;
