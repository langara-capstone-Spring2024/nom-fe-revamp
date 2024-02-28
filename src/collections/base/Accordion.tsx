import { StyleSheet, View, Text, Image } from "react-native";
import { theme as t } from "./../../utils/Theme";
import React from "react";
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

const data = [
  {
    title: "Date",
    hasLeftIcon: true,
    leftIcon: <Image source={DateImage} />,
    hasRightIcon: false,
  },
  {
    title: "Time",
    hasLeftIcon: true,
    leftIcon: <Image source={TimeImage} />,
    hasRightIcon: false,
  },
  {
    title: "Discount Rate",
    hasLeftIcon: true,
    leftIcon: <Image source={PercentImage} />,
    hasRightIcon: false,
  },
  {
    title: "Total Coupons",
    hasLeftIcon: true,
    leftIcon: <Image source={CoupomImage} />,
    hasRightIcon: false,
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

const AccordionCollection = () => {
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
          // hasLeftItem={true}
          // leftItem={<LeftItemComponent />}
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
