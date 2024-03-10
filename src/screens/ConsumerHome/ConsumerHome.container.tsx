import { useEffect, useState } from "react";
import { GetMerchants } from "../../services/react-query/queries/user";
import ConsumerHomeView from "./ConsumerHome.view";
import { GetRatingsByMerchants } from "../../services/react-query/queries/rating";
import { GetActiveDiscountsByMerchants } from "../../services/react-query/queries/discount";
import { GetMenuDiscountsByMerchants } from "../../services/react-query/queries/menuDiscount";
import { useNavigation } from "@react-navigation/native";

const ConsumerHome = () => {
  const navigation = useNavigation();

  const [isRatingsReady, setIsRatingsReady] = useState<boolean>(false);
  const [isDiscountsReady, setIsDiscountsReady] = useState<boolean>(false);
  const [isMenuDiscountsReady, setIsMenuDiscountsReady] =
    useState<boolean>(false);
  const [isRefreshing, setIsRefrshing] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const {
    data: merchants = [],
    refetch: refetchMerchants,
    isFetching: isFetchingMerchants,
  } = GetMerchants(keyword);

  const ratingsData = GetRatingsByMerchants(merchants);
  const discountsData = GetActiveDiscountsByMerchants(merchants);
  const menuDiscountsData = GetMenuDiscountsByMerchants(merchants);

  const handleRefresh = () => {
    setIsRefrshing(true);
    refetchMerchants();
    setTimeout(() => {
      setIsRefrshing(false);
    }, 1000);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    return () => {
      navigation.setOptions({ headerShown: undefined });
    };
  }, []);

  useEffect(() => {
    setIsRatingsReady(false);
    let result = true;
    ratingsData.forEach((ratingData) => {
      if (!ratingData.data) {
        result = false;
        return;
      }
    });
    setIsRatingsReady(result);
  }, [ratingsData]);

  useEffect(() => {
    setIsRatingsReady(false);
    if (ratingsData.length === 0) {
      return;
    }
    let result = true;
    ratingsData.forEach((ratingData) => {
      if (!ratingData.data) {
        result = false;
        return;
      }
    });
    setIsRatingsReady(result);
  }, [ratingsData]);

  useEffect(() => {
    setIsDiscountsReady(false);
    if (discountsData.length === 0) {
      return;
    }
    let result = true;
    discountsData.forEach((discountData) => {
      if (!discountData.data) {
        result = false;
        return;
      }
    });
    setIsDiscountsReady(result);
  }, [discountsData]);

  useEffect(() => {
    setIsMenuDiscountsReady(false);
    if (menuDiscountsData.length === 0) {
      return;
    }
    let result = true;
    menuDiscountsData.forEach((menuDiscountData) => {
      if (!menuDiscountData.data) {
        result = false;
        return;
      }
    });
    setIsMenuDiscountsReady(result);
  }, [menuDiscountsData]);

  const generatedProps = {
    isFetchingMerchants,
    isRatingsReady,
    isDiscountsReady,
    isMenuDiscountsReady,
    isRefreshing,
    keyword,
    setKeyword,
    merchants,
    ratingsData,
    discountsData,
    menuDiscountsData,
    handleRefresh,
  };
  return <ConsumerHomeView {...generatedProps} />;
};

export default ConsumerHome;
