import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import TextInputField from "../../components/base/TextInputField";
import Ionicons from "@expo/vector-icons/Ionicons";

const TextInputFieldCollection = () => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    console.log("Search");
  };

  return (
    <View style={[styles.container]}>
      <View
        style={{
          marginBottom: 32,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      ></View>
      <View style={{ marginBottom: 32 }}>
        <TextInputField
          label="Name"
          placeholder="Name"
          value={value}
          setValue={setValue}
          leftIcon={<Ionicons name="person" size={24} />}
        />
        <Text>Value : {value}</Text>
      </View>
      <View style={{ marginBottom: 32 }}>
        <TextInputField
          label="Password"
          placeholder="Password"
          value={value}
          setValue={setValue}
          secured
        />
        <Text>Value : {value}</Text>
      </View>
      <View style={{ marginBottom: 32 }}>
        <TextInputField
          label="Search"
          placeholder="Search"
          value={value}
          setValue={setValue}
          rightIcon={<Ionicons name="search" size={24} />}
          onRightPress={handleSearch}
          rounded
        />
        <Text>Value : {value}</Text>
      </View>
    </View>
  );
};

export default TextInputFieldCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
