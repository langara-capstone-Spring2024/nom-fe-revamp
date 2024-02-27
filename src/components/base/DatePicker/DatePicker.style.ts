import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 10,
    },
    selectedDates: {
      padding: 10,
    },
  });

export const calendarTheme = {
  selectedDayBackgroundColor: "#3C6DEB",
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: "600",
          color: "#48BFE3",
        },
      },
    },
  },
  arrowColor: "#E51E35",
  "stylesheet.day.basic": {
    today: {
      borderColor: "#48BFE3",
    },
    todayText: {
      color: "#5390D9",
      fontWeight: "800",
    },
  },
};
