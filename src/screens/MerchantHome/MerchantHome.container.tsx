import { useNavigation, useRoute } from "@react-navigation/native";
import MerchantHomeView from "./MerchantHome.view";
import { useEffect } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";
import { useStore } from "../../store";

const MerchantHome = () => {
  // const merchantId = useStore((state) => state.merchantId);
  const navigation = useNavigation();
  // I will redirect later after removing sample screen
  // const route = useRoute();
  // const { merchantId } = route.params as { merchantId: string };

  // const { data: merchant, refetch: refetchMerchant } = GetMerchant(merchantId);

  // let merchantName;

  // if (merchant) {
  //   merchantName = merchant?.name;
  // } else {
  //   merchantName = "";
  // }

  const merchantName = "Aling Fely's";
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
