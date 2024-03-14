import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    menuListContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    menuImage: {
      width: 60,
      height: 60,
      aspectRatio: 1,
      borderRadius: 12,
    },
    noMenuImage: {
      width: 60,
      height: 60,
      borderRadius: 12,
      backgroundColor: t.Surface["inactive"],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 2,
    },
    menuRight: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: t.Border.default,
      paddingVertical: 24,
    },
    menuDetailsContainer: {
      display: "flex",
      width: "74%",
    },
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    radioButtonDot: {
      position: "relative",
      backgroundColor: t.Surface["info-medium"],
    },
  });

export default createStyles;