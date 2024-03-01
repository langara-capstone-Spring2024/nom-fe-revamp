import { StyleSheet, View } from "react-native";
import React from "react";
import ExpandableCalendarComponent from "../../components/base/ExpandableCalendarComponent";
import { CalendarProvider } from "react-native-calendars";

const ExpandableCalendarComponentCollection = () => {
  const currentDate = new Date();
  const INITIAL_DATE = currentDate.toISOString().split("T")[0];

  return (
    <CalendarProvider
      date={INITIAL_DATE}
      disabledOpacity={0.6}
      todayBottomMargin={16}
    >
      <ExpandableCalendarComponent weekView={false} />
    </CalendarProvider>
  );
};

export default ExpandableCalendarComponentCollection;

const styles = StyleSheet.create({});
