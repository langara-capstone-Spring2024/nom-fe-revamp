import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantProfileView from "./RestaurantProfile.view";
import { useEffect, useState } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";
import NavigationService from "../../navigation/NavigationService";
import { GetRatingsByMerchant } from "../../services/react-query/queries/rating";

const RestaurantProfile = () => {
  const { merchantId } = useRoute().params as {
    merchantId: string;
  };

  const navigation = useNavigation();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { data: merchant = null, refetch: refetchMerchant } =
    GetMerchant(merchantId);

  const { data: ratings = [] } = GetRatingsByMerchant(merchantId);

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetchMerchant();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleBack = () => {
    NavigationService.goBack();
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false, useHeaderHeight: 1 });
  }, []);

  useEffect(() => {
    if (merchant) {
      console.log(merchant);
    }
  }, [merchant]);

  const generatedProps = {
    isRefreshing,
    merchant,
    ratings,
    handleRefresh,
  };
  return <RestaurantProfileView {...generatedProps} />;
};

export default RestaurantProfile;
