import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    item: {
      padding: 20,
      backgroundColor: "white",
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
    },
    itemHourText: {
      color: "black",
    },
    itemButtonContainer: {
      flex: 1,
      alignItems: "flex-end",
    },
  });

export default createStyles;
