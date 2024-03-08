import { Merchant } from "../../types";
import { Rating } from "../../types/Rating";

export interface ConsumerHomeGeneratedProps {
  isRatingsReady: boolean;
  isDiscountsReady: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
  merchants: Merchant[];
  ratings: {
    data: Rating[];
    isSuccess: boolean;
    isError: boolean;
  }[];
  discounts: {
    data: {
      _id: string;
      percentDiscount: number;
      validFromTime: string;
      validToTime: string;
    }[];
    isSuccess: boolean;
    isError: boolean;
  }[];
}
