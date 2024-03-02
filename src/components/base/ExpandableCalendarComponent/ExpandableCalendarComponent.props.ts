import { MarkedDates } from "react-native-calendars/src/types";

export interface ExpandableCalendarComponentProps {
  weekView?: boolean;
  markedDates?: MarkedDates;
  allowShadow?: boolean;
  pastScrollRange?: number;
  futureScrollRange?: number;
}
