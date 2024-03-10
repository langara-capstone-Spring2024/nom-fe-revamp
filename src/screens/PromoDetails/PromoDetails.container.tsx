import PromoDetailsView from "./PromoDetails.view";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { getDateValue } from "../../store/createDateSlice";
import { useStore } from "../../store";
import DateImage from "../../../assets/Date.png";
import TimeImage from "../../../assets/Time.png";
import PercentImage from "../../../assets/Percent.png";
import RepeatImage from "../../../assets/Repeat.png";
import DatePicker from "../../components/base/DatePicker";
import DateTimeSelector from "../../components/base/DateTimeSelector";
import WheelPicker from "../../components/base/WheelPicker";
import Chips from "../../components/base/Chips";
import { AddDiscount } from "../../services/react-query/queries/discount";

const PromoDetails = () => {
  const {
    mutate: addDiscountMutation,
    data: discountPayload,
    isPending,
  } = AddDiscount();
  const currentDateTime = new Date();
  const currentDateString = currentDateTime.toISOString().split("T")[0];
  const storedDate = getDateValue(useStore());
  const [selectedStartDate, setSelectedStartDate] = useState(currentDateString);
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedStartDateTime, setSelectedStartDateTime] = useState(
    new Date()
  );
  const [selectedEndDateTime, setSelectedEndDateTime] = useState(new Date());
  const [rateIsVisible, setRateIsVisible] = useState(false);
  const [calendarIsVisible, setCalendarIsVisible] = useState(false);
  const [timeIsVisible, setTimeIsVisible] = useState<string | null>(null);
  const [pickerSelectedValue, pickerSetSelectedValue] = useState(
    Array.from({ length: 100 }, (_, index) => `${(index + 1) * 10}`)[0]
  );
  const selectedItem = useStore((state) => state.selectedItem);
  console.log("selectedItem: ", selectedItem);
  const formatDate = (dateString: string): string => {
    const date = new Date(`${dateString}T00:00:00Z`);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

    return formattedDate;
  };

  const startFormattedTime = selectedStartDateTime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  });

  const endFormattedTime = selectedEndDateTime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  });

  const DateRightComponent = () => (
    <Chips
      label={
        selectedItem ? formatDate(selectedItem.title) : formatDate(storedDate)
      }
    />
  );

  useEffect(() => {
    console.log("Current dateValue:", storedDate);
  }, [storedDate]);

  const handleSelectDates = (startDate: string, endDate: string) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const handleHideShowCalendar = () => {
    setCalendarIsVisible(!calendarIsVisible);
  };

  const handleStartTimeChange = (
    _event: DateTimePickerEvent,
    selectedStartDateTime?: Date
  ) => {
    //setSelectedStartDateTime(selectedStartDateTime || currentDateTime);
    if (selectedStartDateTime) {
      setSelectedStartDateTime(
        new Date(
          `${storedDate}T${selectedStartDateTime.toISOString().split("T")[1]}`
        )
      );
    }
    if (
      selectedStartDateTime &&
      (selectedStartDateTime.getHours() !== currentDateTime.getHours() ||
        selectedStartDateTime.getMinutes() !== currentDateTime.getMinutes())
    ) {
    } else {
      setTimeIsVisible(null);
    }
  };

  const handleEndTimeChange = (
    _event: DateTimePickerEvent,
    selectedEndDateTime?: Date
  ) => {
    if (selectedEndDateTime) {
      setSelectedEndDateTime(
        new Date(
          `${storedDate}T${selectedEndDateTime.toISOString().split("T")[1]}`
        )
      );
    }
    if (
      selectedEndDateTime &&
      (selectedEndDateTime.getHours() !== currentDateTime.getHours() ||
        selectedEndDateTime.getMinutes() !== currentDateTime.getMinutes())
    ) {
    } else {
      setTimeIsVisible(null);
    }
  };

  const StartTimeRightComponent = () => (
    <Chips
      label={selectedItem ? selectedItem.item.startTime : startFormattedTime}
    />
  );
  const EndTimeRightComponent = () => (
    <Chips
      label={selectedItem ? selectedItem.item.endTime : endFormattedTime}
    />
  );

  const handleHideShowTime = (timeType: "start" | "end" | null) => {
    setTimeIsVisible((prevVisibility) =>
      prevVisibility === timeType ? null : timeType
    );
  };

  const pickerValueChange = (value: any) => {
    pickerSetSelectedValue(value);
  };

  const handleHideShowRate = () => {
    setRateIsVisible(!rateIsVisible);
  };

  const DiscountRightComponent = () => (
    <Chips
      label={selectedItem ? selectedItem.item.discount : pickerSelectedValue}
    />
  );

  const handleSubmitDiscount = async () => {
    try {
      const discountPayload = {
        label: "test",
        description: "test",
        percentDiscount: parseFloat(pickerSelectedValue) / 100,
        validFromTime: selectedStartDateTime.toISOString(),
        validToTime: selectedEndDateTime.toISOString(),
        validFromDate: storedDate,
        validToDate: storedDate,
      };
      console.log("discountPayload: ", discountPayload);

      await addDiscountMutation(discountPayload);
    } catch (error) {
      console.error("Error adding discount:", error);
    }
  };

  const accordionList = [
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

  const generatedProps = {
    // generated props here
    accordionList,
    handleSubmitDiscount,
    selectedItem,
  };
  return <PromoDetailsView {...generatedProps} />;
};

export default PromoDetails;