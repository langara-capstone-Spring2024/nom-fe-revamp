import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "../../components/base/Checkbox";

const CheckboxCollection = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        checkBoxValue={checkBoxValue}
        setCheckBoxValue={setCheckBoxValue}
        label="Please check me"
      />
    </View>
  );
};

export default CheckboxCollection;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
});
