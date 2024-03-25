import React, { useState, Fragment, useCallback, useMemo, useRef } from "react";

import { DatePickerProps } from "./DatePicker.props";
import { createStyles, calendarTheme } from "./DatePicker.style";
import { useTheme } from "react-native-paper";

import { CalendarList, DateData } from "react-native-calendars";
import Typography from "../Typography";
import { ScrollView } from "react-native-gesture-handler";
import { useStore } from "../../../store";

const currentDate = new Date();
const INITIAL_DATE = currentDate.toISOString().split("T")[0];
const monthYearString = currentDate.toLocaleString("default", {
  month: "short",
  year: "numeric",
});
const [month, year] = monthYearString.split(" ");

const DatePicker = (props: DatePickerProps) => {
  const {
    onSelectDates,
    singleDate,
    futureScrollRange,
    pastScrollRange,
    calendarWidth,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const { dateValue, setDateValue } = useStore();

  const handleDayPress = (day: DateData) => {
    if (startDate && singleDate) {
      setStartDate(day.dateString);
      setEndDate(day.dateString);
      setDateValue(day.dateString);
    } else if (startDate && endDate) {
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!startDate) {
      setStartDate(day.dateString);
      setEndDate("");
    } else if (!endDate && day.dateString >= startDate) {
      setEndDate(day.dateString);
      onSelectDates(startDate, day.dateString);
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
    <CalendarList
      current={INITIAL_DATE}
      minDate={INITIAL_DATE}
      pastScrollRange={pastScrollRange}
      futureScrollRange={futureScrollRange}
      markedDates={markedDates}
      onDayPress={handleDayPress}
      theme={calendarTheme}
      horizontal
      pagingEnabled
      staticHeader
      calendarWidth={calendarWidth}
      // customHeaderTitle={CustomHeaderTitle}
    />
  );
};

export default DatePicker;
