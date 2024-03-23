import { View, Text } from "react-native";
import { DateTimeSelectorProps } from "./DateTimeSelector.props";
import { useEffect } from "react";
import styles from "./DateTimeSelector.style";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const DateTimeSelector = (props: DateTimeSelectorProps) => {
  const { mode, is24Hour, display, date, setDate, onChange } = props;

  const handleDateTimeChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (onChange) {
      onChange(event, selectedDate);
    }

    if (setDate) {
      setDate(selectedDate || new Date());
    }
  };

  useEffect(() => {
    if (setDate) {
      setDate(new Date());
    }
  }, []);

  return (
    <View>
      <DateTimePicker
        value={date}
        mode={mode}
        is24Hour={is24Hour}
        display={display}
        onChange={onChange ? handleDateTimeChange : undefined}
      />
    </View>
  );
};

export default DateTimeSelector;
