import { View } from "react-native";
import { ExpandableCalendarComponentProps } from "./ExpandableCalendarComponent.props";
import {
  createStyles,
  calendarTheme,
} from "./ExpandableCalendarComponent.style";
import React, { useCallback, useMemo } from "react";
import { useTheme } from "react-native-paper";
import {
  ExpandableCalendar,
  WeekCalendar,
  AgendaList,
} from "react-native-calendars";
import AgendaItem from "../AgendaItem";

const ExpandableCalendarComponent = (
  props: ExpandableCalendarComponentProps
) => {
  const { weekView } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      {weekView ? (
        <WeekCalendar allowShadow />
      ) : (
        <ExpandableCalendar
          allowShadow={true}
          theme={calendarTheme}
          animateScroll
        />
      )}
    </View>
  );
};

export default ExpandableCalendarComponent;
