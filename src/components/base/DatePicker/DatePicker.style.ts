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
  textDayFontFamily: "PublicSansRegular",
  textMonthFontFamily: "PublicSansRegular",
  textDayHeaderFontFamily: "PublicSansRegular",
  textTodayFontFamily: "PublicSansRegular",
  // textMonthFontSize: 16,
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
      fontFamily: "PublicSansRegular",
    },
  },
  // "stylesheet.calendar.header": {
  //   headerContainer: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     // position: "absolute",
  //     // flexDirection: "row",
  //     // left: 0,
  //     // gap: 20,
  //   },
  //   header: {
  //     fontFamily: "PublicSansRegular",
  //     // flexDirection: "row",
  //     // justifyContent: "flex-end",
  //     // marginTop: 6,
  //     // alignItems: "center",
  //   },
  // },
};
