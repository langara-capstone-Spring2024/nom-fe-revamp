import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import DateTimeSelector from "../../components/base/DateTimeSelector";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import Button from "../../components/base/Button";

const DateTimeSelectorCollection = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTimeChange = (
    _event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setSelectedDate(selectedDate || new Date());
  };

  const formattedTime = selectedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.container, { marginLeft: 10 }]}>
          <Button
            text={formattedTime}
            variant="primary"
            buttonSize="sm"
            onPress={() => setShowPicker(!showPicker)}
          />
          {showPicker && (
            <DateTimeSelector
              mode={"time"}
              is24Hour={false}
              display="spinner"
              date={selectedDate}
              onChange={handleTimeChange}
            />
          )}
        </View>
        <View style={styles.container}>
          <DateTimeSelector
            mode={"time"}
            is24Hour={false}
            display="default"
            date={selectedDate}
            onChange={handleTimeChange}
          />
        </View>
        <View style={styles.container}>
          <DateTimeSelector mode={"date"} date={selectedDate} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DateTimeSelectorCollection;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "10%",
  },
});
