import { useNavigation, useRoute } from "@react-navigation/native";
import MerchantHomeView from "./MerchantHome.view";
import { useState, useEffect } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";
import { useStore } from "../../store";

const MerchantHome = () => {
  const navigation = useNavigation();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const merchantId = useStore((state) => state.merchantId);
  const [merchantName, setMerchantName] = useState("");

  const {
    data: merchantDetails = null,
    isLoading,
    isError,
  } = GetMerchant(merchantId);

  useEffect(() => {
    if (!isLoading && !isError && merchantDetails) {
      setMerchantName(merchantDetails?.name || "");
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

  const generatedProps = {
    // generated props here
    merchantName: merchantName,
  };
  return <MerchantHomeView {...generatedProps} />;
};

export default MerchantHome;
