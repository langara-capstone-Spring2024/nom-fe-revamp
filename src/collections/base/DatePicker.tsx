import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DatePicker from "../../components/base/DatePicker";

const DatePickerCollection = () => {
  const [selectedStartDate, setSelectedStartDate] = useState("");
  console.log(
    "🚀 ~ DatePickerCollection ~ selectedStartDate:",
    selectedStartDate
  );
  const [selectedEndDate, setSelectedEndDate] = useState("");
  console.log("🚀 ~ DatePickerCollection ~ selectedEndDate:", selectedEndDate);

  const handleSelectDates = (startDate: string, endDate: string) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };
  return (
    <View>
      <DatePicker onSelectDates={handleSelectDates} />
    </View>
  );
};

export default DatePickerCollection;

const styles = StyleSheet.create({});
