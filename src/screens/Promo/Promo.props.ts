import { MarkedDates } from "react-native-calendars/src/types";

export interface PromoGeneratedProps {
  items: any[];
  onDateChanged: (date: any, updateSource: any) => void;
  onMonthChanged: (date: any, updateSource: any) => void;
  getMarkedDates: () => MarkedDates;
  INITIAL_DATE: string;
}
