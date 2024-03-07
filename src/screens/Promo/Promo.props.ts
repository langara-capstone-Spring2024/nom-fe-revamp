import { MarkedDates } from "react-native-calendars/src/types";
import { Discounts, FormattedDiscount } from "../../types/Discounts";
export interface PromoGeneratedProps {
  items?: FormattedDiscount[];
  onDateChanged: (date: any, updateSource: any) => void;
  onMonthChanged: (date: any, updateSource: any) => void;
  getMarkedDates: () => MarkedDates;
  INITIAL_DATE: string;
  formattedDate: string;
  handleAgendaPress: () => void;
  handleButtonPress: () => void;
}
