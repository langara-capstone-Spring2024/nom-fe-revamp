import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantProfileView from "./RestaurantProfile.view";
import { useEffect, useState } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";
import NavigationService from "../../navigation/NavigationService";
import { GetRatingsByMerchant } from "../../services/react-query/queries/rating";
import {
  GetActiveDiscountsByMerchant,
  GetActiveDiscountsByMerchants,
} from "../../services/react-query/queries/discount";

const RestaurantProfile = () => {
  const { merchantId } = useRoute().params as {
    merchantId: string;
  };

  const navigation = useNavigation();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { data: merchant = null, refetch: refetchMerchant } =
    GetMerchant(merchantId);
  const { data: discounts = [] } = GetActiveDiscountsByMerchant(merchantId);
  const { data: ratings = [] } = GetRatingsByMerchant(merchantId);

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetchMerchant();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleNext = () => {
    console.log("Next");
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false, useHeaderHeight: 1 });
  }, []);

  const generatedProps = {
    isRefreshing,
    merchant,
    discounts,
    ratings,
    handleRefresh,
    handleNext,
  };
  return <RestaurantProfileView {...generatedProps} />;
};

export default RestaurantProfile;
