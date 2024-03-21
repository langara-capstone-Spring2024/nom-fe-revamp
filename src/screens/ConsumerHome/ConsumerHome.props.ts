import { LayoutChangeEvent } from "react-native";
import { Merchant } from "../../types";
import { Discount } from "../../types/Discounts";
import { MenuDiscount } from "../../types/MenuDiscount";
import { Rating } from "../../types/Rating";
import { Ad } from "../../types/Ad";

export interface ConsumerHomeGeneratedProps {
  isFetchingAds: boolean;
  isFetchingMerchants: boolean;
  isErrorOnAds: boolean;
  isErrorOnMerchants: boolean;
  isRatingsReady: boolean;
  isDiscountsReady: boolean;
  isMenuDiscountsReady: boolean;
  isRefreshing: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
  ads: Ad[];
  merchants: Merchant[];
  ratingsData: {
    data: Rating[];
    isSuccess: boolean;
    isError: boolean;
  }[];
  discountsData: {
    data: Discount[];
    isSuccess: boolean;
    isError: boolean;
  }[];
  menuDiscountsData: {
    data: MenuDiscount[];
    isSuccess: boolean;
    isError: boolean;
  }[];
  handleRefresh: () => void;
}
