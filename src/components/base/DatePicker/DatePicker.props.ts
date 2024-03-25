export interface DatePickerProps {
  onSelectDates: (startDate: string, endDate: string) => void;
  singleDate?: boolean;
  futureScrollRange?: number | 2;
  pastScrollRange?: number | 1;
  calendarWidth?: number;
}
