import { StyleSheet, View, Text } from "react-native";
import { theme as t } from "./../../utils/Theme";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Accordion from "../../components/base/Accordion";
import Typography from "../../components/base/Typography";

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

const AccordionList = () => (
  <View>
    <Typography>Date</Typography>
    <Typography>Time</Typography>
    <Typography>Date</Typography>
    <Typography>Discount Rate</Typography>
  </View>
);

const AccordionCollection = () => {
  return (
    <View>
      <Accordion
        title="Details"
        hasLeftItem={true}
        leftItem={<LeftItemComponent />}
        hasRightItem={true}
        rightItem={<RightItemComponent />}
      >
        <AccordionList />
      </Accordion>
    </View>
  );
};

export default AccordionCollection;

const styles = StyleSheet.create({});
