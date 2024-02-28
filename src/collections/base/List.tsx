import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import List from "../../components/base/List";
import DateImage from "../../../assets/Date.png";
import DateTimeSelector from "../../components/base/DateTimeSelector";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { theme as t } from "../../utils/Theme";

const ListCollection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const RightComponent = () => (
    <View>
      <DateTimeSelector mode={"date"} date={selectedDate} />
    </View>
  );

  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: t.Content["invert-strong"],
      }}
    >
      <List
        hasLeftIcon={true}
        leftIcon={<Image source={DateImage} />}
        title="Date"
        rightComponent={<RightComponent />}
        hasRightIcon={true}
        rightIcon={
          <Ionicons name="chevron-expand-outline" size={24} color="black" />
        }
        isLast={true}
      />

      <List
        title="Add Item"
        hasRightIcon={true}
        rightIcon={
          <Entypo name="chevron-small-right" size={24} color="black" />
        }
        isLast={true}
        hasBottomDescription={true}
        bottomDescription="Add or edit items"
      />
    </View>
  );
};

export default ListCollection;

const styles = StyleSheet.create({});
