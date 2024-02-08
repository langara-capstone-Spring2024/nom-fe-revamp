import { View, Text } from "react-native";
import styles from "./SampleScreen.style";
import { SampleScreenGeneratedProps } from "./SampleScreen.props";
import Button from "../../components/base/Button";
import { useStore } from "../../store";
import NavigationService from "../../navigation/NavigationService";
import React from "react";

const SampleScreen = (props: SampleScreenGeneratedProps) => {
  const { setIsLoggedIn } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SampleScreen</Text>
      <Button
        variant="primary"
        buttonSize="lg"
        text="Login"
        onPress={() => setIsLoggedIn(false)}
      />
      <Button
        variant="primary"
        buttonSize="lg"
        text="Scan"
        onPress={() => NavigationService.navigate("Scanner")}
      />
      <Button
        variant="primary"
        buttonSize="lg"
        text="Change password"
        onPress={() => NavigationService.navigate("ChangePassword")}
      />
    </View>
  );
};

export default SampleScreen;
