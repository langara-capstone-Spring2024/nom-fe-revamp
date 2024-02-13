import SampleScreenView from "./SampleScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../store";

const SampleScreen = (): JSX.Element => {
  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem("storage");

      setIsLoggedIn(false);
      setTokens("", "");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const generatedProps = {
    // generated props here
    onLogout,
  };
  return <SampleScreenView {...generatedProps} />;
};

export default SampleScreen;
