import { StyleSheet, View, Text, Image } from "react-native";
import { theme as t } from "./../../utils/Theme";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Accordion from "../../components/base/Accordion";
import Typography from "../../components/base/Typography";
import DateImage from "../../../assets/Date.png";
import CoupomImage from "../../../assets/Coupon.png";
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

const AccordionCollection = () => {
  const LeftItemComponent = () => (
    <View>
      <Entypo name="list" size={24} color="black" />
    </View>
  );

  const RightItemComponent = () => (
    <View>
      <Typography color="inactive">0 Items</Typography>
    </View>
  );

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const handleSelectDates = (startDate: string, endDate: string) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTimeChange = (
    _event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setSelectedDate(selectedDate || new Date());
  };

  const data = [
    {
      title: "Date",
      hasLeftIcon: true,
      leftIcon: <Image source={DateImage} />,
      hasRightIcon: false,
      hiddenComponent: <DatePicker onSelectDates={handleSelectDates} />,
    },
    {
      title: "Time",
      hasLeftIcon: true,
      leftIcon: <Image source={TimeImage} />,
      hasRightIcon: false,
      hiddenComponent: (
        <DateTimeSelector
          mode={"time"}
          is24Hour={false}
          display="spinner"
          date={selectedDate}
          onChange={handleTimeChange}
        />
      ),
    },
    {
      title: "Discount Rate",
      hasLeftIcon: true,
      leftIcon: <Image source={PercentImage} />,
      hasRightIcon: false,
      hasRightComponent: true,
      hiddenComponent: (
        <WheelPicker
          pickerData={Array.from({ length: 100 }, (_, index) => `${index + 1}`)}
        />
      ),
    },
    {
      title: "Total Coupons",
      hasLeftIcon: true,
      leftIcon: <Image source={CoupomImage} />,
      hasRightIcon: false,
      hasRightComponent: true,
      hiddenComponent: (
        <WheelPicker
          pickerData={Array.from({ length: 100 }, (_, index) => `${index + 1}`)}
        />
      ),
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
