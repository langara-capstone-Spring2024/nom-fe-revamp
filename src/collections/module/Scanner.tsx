import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Scanner from "../../components/module/Scanner";
import Button from "../../components/base/Button";

const ScannerCollection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const handleChange = (result: string) => {
    if (result === "success") {
      setResult(result);

      return true;
    } else {
      return false;
    }
  };

  const handleSuccess = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      {isVisible ? (
        <Scanner
          onChange={handleChange}
          onClose={handleClose}
          onSuccess={handleSuccess}
        />
      ) : (
        <Button text="Open" onPress={handleOpen} />
      )}
      <Text>{result}</Text>
    </View>
  );
};

export default ScannerCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
