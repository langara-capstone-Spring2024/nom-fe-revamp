import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { DiscountService } from "../../DiscountService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import {
  Discount,
  Discounts,
  FormattedDiscount,
} from "../../../types/Discounts";
import { RNQueryClient } from "../query-client";
import NavigationService from "../../../navigation/NavigationService";
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

        const formattedDiscount: FormattedDiscount[] = response.data.reduce(
          (acc: any, item: Discounts) => {
            const discount = item.percentDiscount * 100;
            const validFromDate = new Date(item.validFromDate)
              .toISOString()
              .split("T")[0];

            //check validFromDate in accumulator
            const existingDate = acc.find(
              (group: any) => group.title === validFromDate
            );

            if (existingDate) {
              //add new discount to existing date
              existingDate.data.push({
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
                menuCount: item.menuIds.length,
                menuData: item.menuIds,
              });
            } else {
              //if new date title, add a new group for new date
              acc.push({
                title: validFromDate,
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
                    menuCount: item.menuIds.length,
                    menuData: item.menuIds,
                  },
                ],
              });
            }
            return acc;
          },
          []
        );

        //sort the formattedDiscount based on title date
        const sortedFormattedDiscount = formattedDiscount
          .slice()
          .sort((a, b) => {
            const dateA: Date = new Date(a.title);
            const dateB: Date = new Date(b.title);

            return dateA.getTime() - dateB.getTime();
          });

        return sortedFormattedDiscount;
      } catch (error) {
        console.error("Error fetching discounts:", error);
        throw error;
      }
    },
  });
};

export const GetActiveDiscountsByMerchants = (merchants: Merchant[]) => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useQueries<
    any,
    {
      data: Discount[];
      isSuccess: boolean;
      isError: boolean;
    }[]
  >({
    queries: merchants.map((merchant) => ({
      queryKey: [QUERY_KEYS.DISCOUNTS, merchant._id],
      queryFn: async () => {
        try {
          const response: AxiosResponse =
            await discountService.getActiveDiscountsByMerchant(merchant._id);

          return response.data;
        } catch (error) {
          return [];
        }
      },
    })),
  });
};

export const GetActiveDiscountsByMerchant = (merchantId: string) => {
  const discountService = new DiscountService();
  discountService.cancelRequests();

  return useQuery<Discount[]>({
    queryKey: [QUERY_KEYS.DISCOUNTS, merchantId],
    queryFn: async () => {
      try {
        const response: AxiosResponse =
          await discountService.getActiveDiscountsByMerchant(merchantId);

        return response.data;
      } catch (error) {
        return [];
      }
    },
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
        const discount = item.percentDiscount * 100;
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
      NavigationService.navigate("Promo");
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
};
