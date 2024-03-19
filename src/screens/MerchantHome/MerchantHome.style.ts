import { StyleSheet } from "react-native";
import { Theme } from "../../config/theme-config";
import { theme as t } from "../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
    },
    background: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "flex-start",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 16,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      backgroundColor: t.Surface.default,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    menuNavigationContainer: {
      backgroundColor: t.Content["white-strong"],
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 16,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 32,
    },
    menuNavigation: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    menuNavImage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: t.Surface.raised,
      width: 64,
      height: 64,
      borderRadius: 16,
    },
    articleWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      backgroundColor: t.Content["white-strong"],
      padding: 16,
    },
    articles: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
    },
  });

export default createStyles;
