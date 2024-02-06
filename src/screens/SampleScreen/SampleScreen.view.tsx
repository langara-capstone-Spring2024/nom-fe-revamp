import { View, Text } from "react-native";
import styles from "./SampleScreen.style";
import { SampleScreenGeneratedProps } from "./SampleScreen.props";
import Button from "../../components/base/Button";
import NavigationService from "../../navigation/NavigationService";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store";

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
        text="Back"
        onPress={() => setIsLoggedIn(false)}
      />
    </View>
  );
};

export default SampleScreen;
