import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Scanner from "../../components/module/Scanner";
import Button from "../../components/base/Button";

const ScannerCollection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleResult = (result: string) => {
    if (result === "success") {
      setIsVisible(false);
      setResult(result);
    } else {
      setIsError(true);
    }
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
          setResult={handleResult}
          isError={isError}
          setIsError={setIsError}
          onClose={handleClose}
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
