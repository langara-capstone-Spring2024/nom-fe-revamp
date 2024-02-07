import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export interface DateTimeSelectorProps {
  mode: Mode;
  is24Hour?: true | false;
  display?: Display;
  date: Date;
  setDate?: React.Dispatch<React.SetStateAction<Date>>;
  onChange?: (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => void;
}

export type Mode = "time" | "date";
export type Display = "default" | "spinner" | "calendar" | "clock";
