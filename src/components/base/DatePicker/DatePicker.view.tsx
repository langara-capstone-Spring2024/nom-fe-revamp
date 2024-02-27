import React, { useState, Fragment, useCallback, useMemo, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { DatePickerProps } from "./DatePicker.props";
import createStyles from "./DatePicker.style";
import { useTheme } from "react-native-paper";

import {
  Calendar,
  CalendarUtils,
  CalendarList,
  DateData,
} from "react-native-calendars";

const INITIAL_DATE = "2022-07-06";
const RANGE = 24;
const initialDate = "2022-07-05";
const nextWeekDate = "2022-07-14";
const nextMonthDate = "2022-08-05";

const DatePicker = (props: DatePickerProps) => {
  // const theme = useTheme();
  // const styles = useMemo(() => createStyles(theme), [theme]);

  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleDayPress = (day: DateData) => {
    if (startDate && endDate) {
      // If both start and end dates are already set, set the selected date as the start date and clear the end date
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!startDate) {
      // If start date is not set, set the selected date as the start date
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!endDate && day.dateString >= startDate) {
      // If end date is not set and selected date is after or equal to start date, set it as end date
      setEndDate(day.dateString);
    } else if (endDate && day.dateString < startDate) {
      // If end date is set and selected date is before start date, reset both dates
      setStartDate(day.dateString);
      setEndDate("");
    }
  };

  const markedDates = useMemo(() => {
    const marks: { [date: string]: any } = {};

    // Check if both start and end dates are set and end date is not before start date
    if (startDate && endDate && endDate >= startDate) {
      marks[startDate] = { startingDay: true, color: "blue" };
      marks[endDate] = { endingDay: true, color: "blue" };

      // Iterate through each date between start and end and mark them
      let currentDate = new Date(startDate);
      while (currentDate < new Date(endDate)) {
        currentDate.setDate(currentDate.getDate() + 1);
        marks[currentDate.toISOString().split("T")[0]] = { color: "blue" };
      }
    } else {
      // If end date is before start date or not set, mark only the start date
      if (startDate) marks[startDate] = { startingDay: true, color: "blue" };
    }

    return marks;
  }, [startDate, endDate]);

  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [nextWeekDate]: {
        selected: selected === nextWeekDate,
        selectedTextColor: "#5E60CE",
        marked: true,
      },
      [nextMonthDate]: {
        selected: selected === nextMonthDate,
        selectedTextColor: "#5E60CE",
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  const horizontalView = true;

  function renderCustomHeader(date: any) {
    const header = date.toString("MMMM yyyy");
    const [month, year] = header.split(" ");
    const textStyle: TextStyle = {
      fontSize: 18,
      paddingTop: 10,
      paddingBottom: 10,
      color: "#3C3C3C",
      paddingRight: 5,
      fontFamily: "PublicSansRegular",
    };

    return (
      <View style={styles.header}>
        <Text style={[styles.month, textStyle]}>{`${month} ${year}`}</Text>
      </View>
    );
  }

  return (
    <View>
      {/* <CalendarList
        testID={"calendarList"}
        current={initialDate}
        // pastScrollRange={RANGE}
        // futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markedDates={marked}
        renderHeader={renderCustomHeader}
        calendarHeight={!horizontalView ? 390 : undefined}
        theme={theme}
        horizontal
        pagingEnabled
        staticHeader
      /> */}

      <CalendarList
        current={"2022-07-01"} // Set initial month
        pastScrollRange={24}
        futureScrollRange={24}
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={theme}
        // renderHeader={renderCustomHeader}
        horizontal
        pagingEnabled
        staticHeader
      />
      <View style={styles.selectedDates}>
        <Text>Selected Start Date: {startDate}</Text>
        <Text>Selected End Date: {endDate}</Text>
      </View>
    </View>
  );
};

export default DatePicker;

const theme = {
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
  "stylesheet.day.basic": {
    today: {
      borderColor: "#48BFE3",
      borderWidth: 0.8,
    },
    todayText: {
      color: "#5390D9",
      fontWeight: "800",
    },
  },
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  month: {
    marginLeft: 5,
  },
  year: {
    marginRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  selectedDates: {
    padding: 10,
  },
});
// const styles = StyleSheet.create({
//   calendar: {
//     marginBottom: 10,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     margin: 10,
//     alignItems: "center",
//   },
//   switchText: {
//     margin: 10,
//     fontSize: 16,
//   },
//   text: {
//     textAlign: "center",
//     padding: 10,
//     backgroundColor: "lightgrey",
//     fontSize: 16,
//   },
//   disabledText: {
//     color: "grey",
//   },
//   defaultText: {
//     color: "purple",
//   },
//   customCalendar: {
//     height: 250,
//     borderBottomWidth: 1,
//     borderBottomColor: "lightgrey",
//   },
//   customDay: {
//     textAlign: "center",
//   },
//   customHeader: {
//     backgroundColor: "#FCC",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginHorizontal: -4,
//     padding: 8,
//   },
//   customTitleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//   },
//   customTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#00BBF2",
//   },
// });
