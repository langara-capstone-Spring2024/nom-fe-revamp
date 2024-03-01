import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t, theme } from "../../../utils/Theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    calendar: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    header: {
      backgroundColor: "lightgrey",
    },
    section: {
      backgroundColor: "white",
      color: "grey",
      textTransform: "capitalize",
    },
  });

export const calendarTheme = {
  // arrows
  arrowColor: "black",
  // knob
  //expandableKnobColor: themeColor,
  // month
  monthTextColor: "black",
  textMonthFontSize: 16,
  textMonthFontFamily: "PublicSansRegular",
  // day names
  textSectionTitleColor: "black",
  textDayHeaderFontSize: 12,
  textDayHeaderColor: t.Content.inactive,
  textDayHeaderTextTransform: "uppercase",
  textDayHeaderFontFamily: "PublicSansRegular",
  // dates
  // dayTextColor: themeColor,
  todayTextColor: t.Content["info-medium"],
  textDayFontSize: 18,
  textDayFontFamily: "PublicSansRegular",
  textDayFontWeight: "500" as const,
  selectedDayBackgroundColor: t.Surface["info-light"],
  selectedDayTextColor: t.Content["info-medium"],
  // disabled date
  // textDisabledColor: disabledColor,
  // dot (marked date)
  // dotColor: themeColor,
  selectedDotColor: "white",
  // disabledDotColor: disabledColor,
  dotStyle: { marginTop: -2 },
};
