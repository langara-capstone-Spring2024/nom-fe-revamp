import { useQueries, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { QUERY_KEYS } from "../../../config/query-keys";
import { Merchant } from "../../../types";
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

export const GetMenuDiscountsByMerchant = (merchantId?: string) => {
  const menuDiscountService = new MenuDiscountService();
  menuDiscountService.cancelRequests();

  return useQuery<MenuDiscount[]>({
    queryKey: [QUERY_KEYS.MENU_DISCOUNTS, merchantId],
    enabled: merchantId !== undefined,
    queryFn: async () => {
      if (merchantId) {
        try {
          const response = await menuDiscountService.getMenuDiscountsMerchant(
            merchantId
          );

          return response.data;
        } catch (error) {
          return [];
        }
      }
    },
  });
};

export const GetMenuDiscountsByDiscount = (discountId?: string) => {
  const menuDiscountService = new MenuDiscountService();
  menuDiscountService.cancelRequests();

  return useQuery<MenuDiscount[]>({
    queryKey: [QUERY_KEYS.MENU_DISCOUNTS, discountId],
    enabled: discountId !== undefined,
    queryFn: async () => {
      if (discountId) {
        try {
          const response = await menuDiscountService.getMenuDiscountsDiscount(
            discountId
          );

          return response.data;
        } catch (error) {
          return [];
        }
      }
    },
  });
};
