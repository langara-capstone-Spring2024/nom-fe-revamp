import { useQueries } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { QUERY_KEYS } from "../../../config/query-keys";
import { Merchant } from "../../../types";
import { RatingService } from "../../RatingService";
import { Rating } from "../../../types/Rating";
import { MenuDiscountService } from "../../MenuDiscountService";
import { MenuDiscount } from "../../../types/MenuDiscount";

export const GetMenuDiscountsByMerchants = (merchants: Merchant[]) => {
  const menuDiscountService = new MenuDiscountService();
  menuDiscountService.cancelRequests();

  return useQueries<
    any,
    {
      data: MenuDiscount[];
      isSuccess: boolean;
      isError: boolean;
    }[]
  >({
    queries: merchants.map((merchant) => ({
      queryKey: [QUERY_KEYS.MENU_DISCOUNTS, merchant._id],
      queryFn: async () => {
        try {
          const response: AxiosResponse =
            await menuDiscountService.getMenuDiscountsMerchant(merchant._id);

          return response.data.data;
        } catch (error) {
          return [];
        }
      },
    })),
  });
};
