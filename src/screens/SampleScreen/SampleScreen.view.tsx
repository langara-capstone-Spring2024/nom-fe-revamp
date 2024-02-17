import { View, Text } from "react-native";
import styles from "./SampleScreen.style";
import { SampleScreenGeneratedProps } from "./SampleScreen.props";
import Button from "../../components/base/Button";
import { useStore } from "../../store";
import NavigationService from "../../navigation/NavigationService";
import React from "react";

const SampleScreen = (props: SampleScreenGeneratedProps) => {
  const { onLogout } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SampleScreen</Text>
      <Button
        variant="primary"
        buttonSize="lg"
        text="Logout"
        onPress={() => onLogout()}
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
