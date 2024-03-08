import { useEffect, useState } from "react";
import { GetMerchants } from "../../services/react-query/queries/user";
import ConsumerHomeView from "./ConsumerHome.view";
import { GetRatings } from "../../services/react-query/queries/rating";
import { GetActiveDiscounts } from "../../services/react-query/queries/discount";

const ConsumerHome = () => {
  const {
    isError: isErrorOnMerchants,
    data: merchants = [],
    refetch: refetchMerchants,
  } = GetMerchants();

  const ratings = GetRatings(merchants);
  const discounts = GetActiveDiscounts(merchants);

  const [isRatingsReady, setIsRatingsReady] = useState<boolean>(false);
  const [isDiscountsReady, setIsDiscountsReady] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    setIsRatingsReady(false);
    let result = true;
    ratings.forEach((rating) => {
      if (!rating.data) {
        result = false;
        return;
      }
    });
    setIsRatingsReady(result);
  }, [ratings]);

  useEffect(() => {
    setIsDiscountsReady(false);
    let result = true;
    discounts.forEach((discount) => {
      if (!discount.data) {
        result = false;
        return;
      }
    });
    setIsDiscountsReady(result);
  }, [discounts]);

  const generatedProps = {
    isRatingsReady,
    isDiscountsReady,
    keyword,
    setKeyword,
    merchants,
    ratings,
    discounts,
  };
  return <ConsumerHomeView {...generatedProps} />;
};

export default ConsumerHome;
