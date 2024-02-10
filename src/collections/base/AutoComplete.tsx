import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AutoComplete from "../../components/base/AutoComplete";
import TextInputField from "../../components/base/TextInputField";
import { Place } from "../../types";

const AutoCompleteCollection = () => {
  const [place1, setPlace1] = useState<Place | undefined>(undefined);
  const [place2, setPlace2] = useState<Place | undefined>({
    address: "Langara College, West 49th Avenue, Vancouver, BC, Canada",
    latitude: 49.22442010000001,
    longitude: -123.1088805,
  });

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ marginBottom: 16 }}>
        <AutoComplete value={place1} setValue={setPlace1} />
      </View>
      <AutoComplete
        placeholder="Search..."
        value={place1}
        setValue={setPlace1}
      />
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text>address : {place1?.address}</Text>
        <Text>latitude : {place1?.latitude}</Text>
        <Text>longitude : {place1?.longitude}</Text>
      </View>
      <AutoComplete
        placeholder="Search..."
        value={place2}
        setValue={setPlace2}
      />
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text>address : {place2?.address}</Text>
        <Text>latitude : {place2?.latitude}</Text>
        <Text>longitude : {place2?.longitude}</Text>
      </View>
    </View>
  );
};

export default AutoCompleteCollection;

const styles = StyleSheet.create({});
