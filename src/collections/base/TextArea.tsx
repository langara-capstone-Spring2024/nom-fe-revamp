import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import TextArea from "../../components/base/TextArea";

const TextAreaCollection = () => {
  const [value, setValue] = useState("");
  return (
    <View style={{paddingHorizontal: 12}}>
      <TextArea value={value} setValue={setValue} label="Tagline" />
     </View>
  );
};

export default TextAreaCollection;

const styles = StyleSheet.create({});
