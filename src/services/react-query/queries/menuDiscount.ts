import { useQuery, useQueries } from "@tanstack/react-query";
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

          return response.data;
        } catch (error) {
          return [];
        }
      },
    })),
  });
};


export const GetMenuDiscountsByMerchantAndDiscount = (merchantId: string, discountId: string) => {
  const menuDiscountService = new MenuDiscountService();
  menuDiscountService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.MENU_DISCOUNTS, merchantId, discountId],
    queryFn: async () => {
      try {
        const response: AxiosResponse = await menuDiscountService.getMenuDiscountsByMerchantAndDiscount(
          merchantId, discountId
        );
        const consumerDiscounts: MenuDiscount[] = response.data;
        return consumerDiscounts;
      } catch (error) {
        console.error("Error fetching discount:", error);
        throw error;
      }
    },
  });
};