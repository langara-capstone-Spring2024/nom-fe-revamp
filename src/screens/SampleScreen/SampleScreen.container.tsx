import SampleScreenView from "./SampleScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../store";
import { useState } from "react";
import { GetMerchants } from "../../services/react-query/queries/user";
import { useFocusEffect } from "@react-navigation/native";

const SampleScreen = (): JSX.Element => {
  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    isError: isErrorOnMerchants,
    data: merchants,
    refetch: refetchMerchants,
  } = GetMerchants();

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem("storage");

      setIsLoggedIn(false);
      setTokens("", "");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleToggleModal = () => {
    setIsVisible((oldValue) => !oldValue);
  };

  useFocusEffect(() => {
    refetchMerchants();
  });

  const generatedProps = {
    // generated props here
    isVisible,
    isErrorOnMerchants,
    merchants,
    onLogout,
    handleToggleModal,
  };
  return <SampleScreenView {...generatedProps} />;
};

export default SampleScreen;
