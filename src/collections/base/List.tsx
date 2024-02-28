import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import List from "../../components/base/List";
import DateImage from "../../../assets/Date.png";
import DateTimeSelector from "../../components/base/DateTimeSelector";

const ListCollection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const RightComponent = () => (
    <View>
      <DateTimeSelector mode={"date"} date={selectedDate} />
    </View>
  );

  return (
    <View>
      <List
        hasLeftIcon={true}
        leftIcon={<Image source={DateImage} />}
        title="Date"
        rightComponent={<RightComponent />}
      />
    </View>
  );
};

export default ListCollection;

const styles = StyleSheet.create({});
