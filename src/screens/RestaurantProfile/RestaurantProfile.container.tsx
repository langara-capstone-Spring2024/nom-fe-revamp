import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantProfileView from "./RestaurantProfile.view";
import { useEffect, useState } from "react";
import { GetMerchant } from "../../services/react-query/queries/user";
import { GetRatingsByMerchant } from "../../services/react-query/queries/rating";
import { GetActiveDiscountsByMerchant } from "../../services/react-query/queries/discount";
import { Coupon } from "../../types/Coupon";
import {
  AddConsumerDiscount,
  GetConsumerDiscountsByMerchant,
} from "../../services/react-query/queries/consumerDiscount";
import NavigationService from "../../navigation/NavigationService";
import { GetMenuDiscountsByMerchant } from "../../services/react-query/queries/menuDiscount";

const RestaurantProfile = () => {
  const { merchantId } = useRoute().params as {
    merchantId: string;
  };

  const navigation = useNavigation();

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | undefined>(
    undefined
  );

  const { data: merchant = null, refetch: refetchMerchant } =
    GetMerchant(merchantId);
  const { data: consumerDiscounts = [], refetch: refetchConsumerDiscounts } =
    GetConsumerDiscountsByMerchant(merchantId);
  const { data: discounts = [], refetch: refetchDiscounts } =
    GetActiveDiscountsByMerchant(merchantId);
  const { data: menuDiscounts = [], refetch: refetchMenuDiscounts } =
    GetMenuDiscountsByMerchant(merchantId);
  const { data: ratings = [], refetch: refetchRatings } =
    GetRatingsByMerchant(merchantId);
  const {
    data: consumerDiscount,
    mutate: mutateConsumerDiscount,
    isError: isErrorOnAddConsumerDiscount,
  } = AddConsumerDiscount();

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetchMerchant();
    refetchConsumerDiscounts();
    refetchDiscounts();
    refetchMenuDiscounts();
    refetchRatings();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleSelectCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
  };

  const handleNext = () => {
    if (selectedCoupon && selectedCoupon._id) {
      mutateConsumerDiscount({
        merchantId: merchantId,
        discountId: selectedCoupon._id,
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: merchant?.name,
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (consumerDiscount) {
      NavigationService.navigate("ConsumerDiscount", {
        consumerDiscountId: consumerDiscount._id,
      });
    }
  }, [consumerDiscount]);

  const generatedProps = {
    isRefreshing,
    isErrorOnAddConsumerDiscount,
    selectedCoupon,
    merchant,
    consumerDiscounts,
    discounts,
    menuDiscounts,
    ratings,
    handleRefresh,
    handleSelectCoupon,
    handleNext,
  };
  return <RestaurantProfileView {...generatedProps} />;
};

export default RestaurantProfile;
