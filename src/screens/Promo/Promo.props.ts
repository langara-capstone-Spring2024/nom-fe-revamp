import { MarkedDates } from "react-native-calendars/src/types";
import { Discounts, FormattedDiscount } from "../../types/Discounts";
export interface PromoGeneratedProps {
  activeDiscounts?: FormattedDiscount[];
  onDateChanged: (date: any, updateSource: any) => void;
  onMonthChanged: (date: any, updateSource: any) => void;
  getMarkedDates: () => MarkedDates;
  INITIAL_DATE: string;
  formattedDate: string;
  handleAgendaPress: (item: any) => void;
  handleButtonPress: () => void;
  handleAddDiscount: () => void;
}
