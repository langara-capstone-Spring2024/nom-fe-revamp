import HamburgerScreenView from "./HamburgerScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../store";
import { GetMerchant } from "../../services/react-query/queries/user";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HamburgerScreen = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const merchantId = useStore((state) => state.merchantId);
  const [merchantName, setMerchantName] = useState("");
  const [merchantImg, setMerchantImg] = useState("");

  const {
    data: merchantDetails = null,
    isLoading,
    isError,
  } = GetMerchant(merchantId);

  useEffect(() => {
    if (!isLoading && !isError && merchantDetails) {
      setMerchantName(merchantDetails?.name || "");
      setMerchantImg(merchantDetails?.imageUrls[0]);
    }
  }, [merchantDetails, isLoading, isError]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    return () => {
      navigation.setOptions({ headerShown: undefined });
    };
  }, []);

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
    merchantName,
    merchantImg,
  };
  return <HamburgerScreenView {...generatedProps} />;
};

export default HamburgerScreen;
