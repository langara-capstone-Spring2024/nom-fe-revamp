import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantProfileView from "./RestaurantProfile.view";
import { useEffect } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";

const RestaurantProfile = () => {
  const { merchantId } = useRoute().params as {
    merchantId: string;
  };

  const { data: merchant = null } = GetMerchant(merchantId);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false, useHeaderHeight: 1 });
  }, []);

  useEffect(() => {
    if (merchant) {
      console.log(merchant);
    }
  }, [merchant]);

  const generatedProps = {
    merchant,
  };
  return <RestaurantProfileView {...generatedProps} />;
};

export default RestaurantProfile;
