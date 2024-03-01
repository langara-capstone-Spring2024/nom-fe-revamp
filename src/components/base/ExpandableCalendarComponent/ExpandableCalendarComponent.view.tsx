import { View } from "react-native";
import { ExpandableCalendarComponentProps } from "./ExpandableCalendarComponent.props";
import {
  createStyles,
  calendarTheme,
} from "./ExpandableCalendarComponent.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { ExpandableCalendar, WeekCalendar } from "react-native-calendars";

const ExpandableCalendarComponent = (
  props: ExpandableCalendarComponentProps
) => {
  const { weekView, markedDates, allowShadow = true } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={{ zIndex: 99 }}>
      {weekView ? (
        <WeekCalendar allowShadow markedDates={markedDates} />
      ) : (
        <ExpandableCalendar
          allowShadow={allowShadow}
          theme={calendarTheme}
          animateScroll
          markedDates={markedDates}
        />
      )}
    </View>
  );
};

export default ExpandableCalendarComponent;
