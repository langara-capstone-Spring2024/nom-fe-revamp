import { Merchant } from "../../types";
import { Discount } from "../../types/Discounts";
import { MenuDiscount } from "../../types/MenuDiscount";
import { Rating } from "../../types/Rating";

export interface ConsumerHomeGeneratedProps {
  isRatingsReady: boolean;
  isDiscountsReady: boolean;
  isMenuDiscountsReady: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
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
}
