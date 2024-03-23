import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: t.Border.default,
    },
    itemHourText: {
      color: t.Content["info-dark"],
    },
    itemButtonContainer: {
      flex: 1,
      alignItems: "flex-end",
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    bar: {
      height: 40,
      width: 3,
      borderRadius: 8,
      //will make a condition to change the background color, still checking with designers
      backgroundColor: "pink",
    },
    date: {
      marginRight: 16,
    },
    menu: {
      gap: 8,
    },
    discount: {
      gap: 8,
    },
    subtext: {
      gap: 16,
    },
    rightContent: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
  });

export default createStyles;
