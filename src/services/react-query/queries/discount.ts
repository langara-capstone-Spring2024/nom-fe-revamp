import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { DiscountService } from "../../DiscountService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { Discounts, FormattedDiscount } from "../../../types/Discounts";
import { RNQueryClient } from "../query-client";
import { Merchant } from "../../../types";

export const GetAllActiveDiscount = () => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.DISCOUNT],
    queryFn: async () => {
      try {
        const response: AxiosResponse =
          await discountService.getAllActiveDiscount();

        const formattedDiscount: FormattedDiscount[] = response.data.map(
          (item: Discounts) => {
            const discount =
              parseFloat(item.percentDiscount.$numberDecimal) * 10;

            return {
              title: new Date(item.validFromDate),
              data: [
                {
                  title: item.label || "",
                  startTime: new Date(item.validFromTime).toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit" }
                  ),
                  endTime: new Date(item.validToTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  discount: discount,
                  menuCount: 5,
                },
              ],
            };
          }
        );

        return formattedDiscount;
      } catch (error) {
        console.error("Error fetching discounts:", error);
        throw error;
      }
    },
  });
};

export const GetActiveDiscounts = (merchants: Merchant[]) => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useQueries<
    any,
    {
      data: {
        _id: string;
        percentDiscount: number;
        validFromTime: string;
        validToTime: string;
      }[];
      isSuccess: boolean;
      isError: boolean;
    }[]
  >({
    queries: merchants.map((merchant) => ({
      queryKey: [QUERY_KEYS.DISCOUNTS, merchant._id],
      queryFn: async () => {
        try {
          const response: AxiosResponse =
            await discountService.getActiveDiscounts(merchant._id);

          return response.data;
        } catch (error) {
          return [];
        }
      },
    })),
  });
};

export const GetDiscount = (discountId: string) => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.DISCOUNT, discountId],
    queryFn: async () => {
      try {
        const response: AxiosResponse = await discountService.getDiscount(
          discountId
        );
        const item: Discounts = response.data;
        const discount = parseFloat(item.percentDiscount.$numberDecimal) * 10;
        const formattedDiscount: FormattedDiscount = {
          title: new Date(item.validFromDate),
          data: [
            {
              title: item.label || "",
              startTime: new Date(item.validFromTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: new Date(item.validToTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              discount: discount,
              menuCount: 5,
            },
          ],
        };

        return formattedDiscount;
      } catch (error) {
        console.error("Error fetching discount:", error);
        throw error;
      }
    },
  });
};

export const AddDiscount = () => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useMutation({
    mutationFn: async (discountPayload: Discounts) => {
      const response: AxiosResponse = await discountService.addDiscount(
        discountPayload
      );
      return response.data;
    },
    onSuccess: (data) => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.DISCOUNT],
        exact: true,
      });
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
};
