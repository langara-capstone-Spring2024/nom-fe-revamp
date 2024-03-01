import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Scanner from "../../components/module/Scanner";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/base/Button";

const ScannerCollection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleResult = (result: string) => {
    console.log(result);
    // setIsError(true);
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
