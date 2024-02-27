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
import { createStyles, calendarTheme } from "./DatePicker.style";
import { useTheme } from "react-native-paper";

import { CalendarList, DateData } from "react-native-calendars";
import Typography from "../Typography";

const currentDate = new Date();
const INITIAL_DATE = currentDate.toISOString().split("T")[0];
const monthYearString = currentDate.toLocaleString("default", {
  month: "short",
  year: "numeric",
});
const [month, year] = monthYearString.split(" ");

const DatePicker = (props: DatePickerProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleDayPress = (day: DateData) => {
    if (startDate && endDate) {
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!startDate) {
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!endDate && day.dateString >= startDate) {
      setEndDate(day.dateString);
    } else if (endDate && day.dateString < startDate) {
      setStartDate(day.dateString);
      setEndDate("");
    }
  };

  const markedDates = useMemo(() => {
    const marks: { [date: string]: any } = {};

    if (startDate) {
      marks[startDate] = {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      };
    }

    if (startDate && endDate && endDate >= startDate) {
      marks[startDate] = {
        startingDay: true,
        selected: true,
      };
      marks[endDate] = {
        endingDay: true,
        selected: true,
      };

      // Iterate through each date between start and end and mark them
      let currentDate = new Date(startDate);
      while (currentDate < new Date(endDate)) {
        currentDate.setDate(currentDate.getDate() + 1);
        marks[currentDate.toISOString().split("T")[0]] = {
          selected: true,
        };
      }
    } else {
      if (startDate)
        marks[startDate] = {
          startingDay: true,
          selected: true,
        };
    }
    return marks;
  }, [startDate, endDate]);

  const CustomHeaderTitle = (
    <Typography variant="body">
      {month} {year}
    </Typography>
  );

  return (
    <View>
      <CalendarList
        current={INITIAL_DATE}
        minDate={INITIAL_DATE}
        pastScrollRange={24}
        futureScrollRange={24}
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={calendarTheme}
        horizontal
        pagingEnabled
        staticHeader
        customHeaderTitle={CustomHeaderTitle}
      />
      <View style={styles.selectedDates}>
        <Text>Selected Start Date: {startDate}</Text>
        <Text>Selected End Date: {endDate}</Text>
      </View>
    </View>
  );
};

export default DatePicker;
