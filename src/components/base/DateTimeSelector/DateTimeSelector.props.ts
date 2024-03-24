import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export interface DateTimeSelectorProps {
  mode: Mode;
  is24Hour?: true | false;
  display?: Display;
  date: Date;
  setDate?: (date: Date) => void;
  onChange?: (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => void;
}

export type Mode = "time" | "date";
export type Display = "default" | "spinner" | "calendar" | "clock";
