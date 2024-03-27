import HamburgerScreenView from "./HamburgerScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "../../store";
import {
  GetMerchant,
  GetConsumer,
} from "../../services/react-query/queries/user";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { jwtDecode } from "jwt-decode";

const HamburgerScreen = () => {
  const navigation = useNavigation();
  const [role, setRole] = useState<string>("");
  const { setIsLoggedIn, setTokens, accessToken } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
    accessToken: state.accessToken,
  }));

  const merchantId = useStore((state) => state.merchantId);
  const [merchantName, setMerchantName] = useState("");
  const [merchantImg, setMerchantImg] = useState("");

  const consumerId = useStore((state) => state.consumerId);
  const [consumerFirstName, setConsumerFirstName] = useState("");
  const [consumerLastName, setConsumerLastName] = useState("");
  const [consumerImg, setConsumerImg] = useState("");

  const {
    data: merchantDetails = null,
    isLoading,
    isError,
  } = GetMerchant(merchantId);

  const { data: consumerDetails = null } = GetConsumer(consumerId);

  useEffect(() => {
    if (accessToken) {
      const decodedToken: { UserInfo: { role: string } } =
        jwtDecode(accessToken);

      const role = decodedToken.UserInfo.role;

      if (role) {
        setRole(role);
      }
    }
  }, [accessToken]);

  useEffect(() => {
    if (!isLoading && !isError && merchantDetails) {
      setMerchantName(merchantDetails?.name || "");
      setMerchantImg(merchantDetails?.imageUrls[0]);
    }
  }, [merchantDetails, isLoading, isError]);

  useEffect(() => {
    if (consumerDetails) {
      setConsumerFirstName(consumerDetails?.user.firstName || "");
      setConsumerLastName(consumerDetails?.user.lastName || "");
      setConsumerImg("");
    }
  }, [consumerDetails]);

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
    consumerFirstName,
    consumerLastName,
    role,
  };
  return <HamburgerScreenView {...generatedProps} />;
};

export default HamburgerScreen;
