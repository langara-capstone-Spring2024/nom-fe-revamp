import { useEffect, useState } from "react";
import { GetMerchants } from "../../services/react-query/queries/user";
import ConsumerHomeView from "./ConsumerHome.view";
import { GetRatingsByMerchants } from "../../services/react-query/queries/rating";
import { GetActiveDiscountsByMerchants } from "../../services/react-query/queries/discount";
import { Menu } from "../../types";
import { GetMenuDiscountsByMerchants } from "../../services/react-query/queries/menuDiscount";

const ConsumerHome = () => {
  const { data: merchants = [] } = GetMerchants();

  const ratingsData = GetRatingsByMerchants(merchants);
  const discountsData = GetActiveDiscountsByMerchants(merchants);
  const menuDiscountsData = GetMenuDiscountsByMerchants(merchants);

  const [isRatingsReady, setIsRatingsReady] = useState<boolean>(false);
  const [isDiscountsReady, setIsDiscountsReady] = useState<boolean>(false);
  const [isMenuDiscountsReady, setIsMenuDiscountsReady] =
    useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

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
    setIsDiscountsReady(false);
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
    let result = true;
    menuDiscountsData.forEach((menuDiscountData) => {
      if (!menuDiscountData.data) {
        result = false;
        return;
      }
    });
    setIsMenuDiscountsReady(result);
  }, [menuDiscountsData]);

  // useEffect(() => {
  //   if (isMenuDiscountsReady) {
  //     console.log(
  //       menuDiscountsData
  //         .map((menuDiscountData) => {
  //           return menuDiscountData.data.map((menuDiscount) => {
  //             // console.log(menuDiscount.menu.name);
  //             return <>{menuDiscount.menu.name}</>;
  //           });
  //         })
  //         .flat()
  //     );
  //   }
  // }, [isMenuDiscountsReady]);

  const generatedProps = {
    isRatingsReady,
    isDiscountsReady,
    isMenuDiscountsReady,
    keyword,
    setKeyword,
    merchants,
    ratingsData,
    discountsData,
    menuDiscountsData,
  };
  return <ConsumerHomeView {...generatedProps} />;
};

export default ConsumerHome;
