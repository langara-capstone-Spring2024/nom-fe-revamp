import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { theme as t } from "./../../utils/Theme";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import Accordion from "../../components/base/Accordion";
import Typography from "../../components/base/Typography";
import DateImage from "../../../assets/Date.png";
import TimeImage from "../../../assets/Time.png";
import PercentImage from "../../../assets/Percent.png";
import RepeatImage from "../../../assets/Repeat.png";
import List from "../../components/base/List";
import { Ionicons } from "@expo/vector-icons";
import WheelPicker from "../../components/base/WheelPicker";
import Button from "../../components/base/Button";
import DatePicker from "../../components/base/DatePicker";
import DateTimeSelector from "../../components/base/DateTimeSelector";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import Chips from "../../components/base/Chips";
import { getDateValue } from "../../store/createDateSlice";
import { useStore } from "../../store";

const AccordionCollection = () => {
  const currentDateTime = new Date();
  const currentDateString = currentDateTime.toISOString().split("T")[0];
  const [selectedStartDate, setSelectedStartDate] = useState(currentDateString);
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [calendarChipsLabel, setCalendarChipsLabel] =
    useState(currentDateString);
  const [rateIsVisible, setRateIsVisible] = useState(false);
  const [calendarIsVisible, setCalendarIsVisible] = useState(false);
  const [timeIsVisible, setTimeIsVisible] = useState<string | null>(null);
  const [selectedStartDateTime, setSelectedStartDateTime] = useState(
    new Date()
  );
  const [selectedEndDateTime, setSelectedEndDateTime] = useState(new Date());
  const [pickerSelectedValue, pickerSetSelectedValue] = useState(
    Array.from({ length: 100 }, (_, index) => `${(index + 1) * 10}`)[0]
  );

  const RightItemComponent = () => (
    <View>
      <Typography color="inactive">0 Items</Typography>
    </View>
  );

  /* ====== for Calendar List ====== */
  const dateValue = getDateValue(useStore());

  const handleHideShowCalendar = () => {
    setCalendarIsVisible(!calendarIsVisible);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(`${dateString}T00:00:00Z`);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", {
      ...options,
      timeZone: "UTC",
    });

    return formattedDate;
  };

  useEffect(() => {
    console.log("Current dateValue:", dateValue);
    const initialTime = new Date(dateValue);
    initialTime.setHours(12, 0, 0, 0);

    handleSyncDateTime(dateValue);
  }, [dateValue]);

  const handleSyncDateTime = (dateValue: string) => {
    const initialTime = new Date(dateValue);
    initialTime.setHours(
      currentDateTime.getHours(),
      currentDateTime.getMinutes(),
      0,
      0
    );

    setSelectedStartDateTime(initialTime);
    setSelectedEndDateTime(initialTime);
  };

  const handleSelectDates = (startDate: string, endDate: string) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const DateRightComponent = () => <Chips label={formatDate(dateValue)} />;
  /*========= for Time List =========*/
  const handleHideShowTime = (timeType: "start" | "end" | null) => {
    setTimeIsVisible((prevVisibility) =>
      prevVisibility === timeType ? null : timeType
    );
  };

  const startFormattedTime = selectedStartDateTime.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  });

  const endFormattedTime = selectedEndDateTime.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  });

  const handleStartTimeChange = (
    _event: DateTimePickerEvent,
    selectedStartDateTime?: Date
  ) => {
    setSelectedStartDateTime(selectedStartDateTime || currentDateTime);
    if (
      selectedStartDateTime &&
      (selectedStartDateTime.getHours() !== currentDateTime.getHours() ||
        selectedStartDateTime.getMinutes() !== currentDateTime.getMinutes())
    ) {
    } else {
      setTimeIsVisible(null);
    }
  };
  console.log("startTime: ", selectedStartDateTime);

  const handleEndTimeChange = (
    _event: DateTimePickerEvent,
    selectedEndDateTime?: Date
  ) => {
    setSelectedEndDateTime(selectedEndDateTime || currentDateTime);
    if (
      selectedEndDateTime &&
      (selectedEndDateTime.getHours() !== currentDateTime.getHours() ||
        selectedEndDateTime.getMinutes() !== currentDateTime.getMinutes())
    ) {
    } else {
      setTimeIsVisible(null);
    }
  };
  console.log("endTime: ", selectedEndDateTime);

  const StartTimeRightComponent = () => <Chips label={startFormattedTime} />;
  const EndTimeRightComponent = () => <Chips label={endFormattedTime} />;

  /*======= for discount rate =======*/
  const handleHideShowRate = () => {
    setRateIsVisible(!rateIsVisible);
  };

  const pickerValueChange = (value: any) => {
    pickerSetSelectedValue(value);
    console.log("rate: ", value);
  };

  const DiscountRightComponent = () => <Chips label={pickerSelectedValue} />;

  const data = [
    {
      title: "Date",
      hasLeftIcon: true,
      leftIcon: <Image source={DateImage} />,
      hasRightIcon: false,
      hasRightComponent: true,
      hiddenComponent: (
        <DatePicker onSelectDates={handleSelectDates} singleDate />
      ),
      handleRightComponentClick: handleHideShowCalendar,
      hiddenComponentIsVisible: calendarIsVisible,
      rightComponent: DateRightComponent,
    },
    {
      title: "Time",
      hasLeftIcon: true,
      leftIcon: <Image source={TimeImage} />,
      hasRightIcon: false,
      hasRightComponent: true,
      hiddenComponent: (
        <>
          {timeIsVisible === "start" && (
            <DateTimeSelector
              mode={"time"}
              is24Hour={false}
              display="spinner"
              date={selectedStartDateTime}
              onChange={handleStartTimeChange}
            />
          )}
          {timeIsVisible === "end" && (
            <DateTimeSelector
              mode={"time"}
              is24Hour={false}
              display="spinner"
              date={selectedEndDateTime}
              onChange={handleEndTimeChange}
            />
          )}
        </>
      ),
      rightComponent: (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
          }}
        >
          <TouchableWithoutFeedback onPress={() => handleHideShowTime("start")}>
            <View>
              <StartTimeRightComponent />
            </View>
          </TouchableWithoutFeedback>
          <Text>-</Text>
          <TouchableWithoutFeedback onPress={() => handleHideShowTime("end")}>
            <View>
              <EndTimeRightComponent />
            </View>
          </TouchableWithoutFeedback>
        </View>
      ),
      handleRightComponentClick: handleHideShowTime,
      hiddenComponentIsVisible: timeIsVisible,
    },
    {
      title: "Discount Rate",
      hasLeftIcon: true,
      leftIcon: <Image source={PercentImage} />,
      hasRightIcon: false,
      hasRightComponent: true,
      hiddenComponent: (
        <WheelPicker
          pickerData={Array.from(
            { length: 100 },
            (_, index) => `${(index + 1) * 10}`
          )}
          onValueChange={pickerValueChange}
          selectedValue={pickerSelectedValue}
        />
      ),
      rightComponent: DiscountRightComponent,
      handleRightComponentClick: handleHideShowRate,
      hiddenComponentIsVisible: rateIsVisible,
    },
    {
      title: "Repeat",
      hasLeftIcon: true,
      leftIcon: <Image source={RepeatImage} />,
      hasRightIcon: true,
      rightIcon: (
        <Ionicons name="chevron-expand-outline" size={20} color="black" />
      ),
      isLast: true,
    },
  ];

  return (
    <>
      <View style={{ padding: 20 }}>
        <Accordion title="Details">
          {data.map((item, index) => (
            <List key={index} {...item} />
          ))}
        </Accordion>
      </View>

      <View style={{ padding: 20 }}>
        <Accordion
          title="Items"
          hasRightItem={true}
          rightItem={<RightItemComponent />}
        >
          <List
            title="Add Item"
            hasRightIcon={true}
            rightIcon={
              <Entypo name="chevron-small-right" size={24} color="black" />
            }
            isLast={true}
            hasBottomDescription={true}
            bottomDescription="Add or edit items"
            style={{ paddingVertical: 40 }}
          />
        </Accordion>
      </View>
    </>
  );
};

export default AccordionCollection;

const styles = StyleSheet.create({});
