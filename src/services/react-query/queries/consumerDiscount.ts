import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { ConsumerDiscountService } from "../../ConsumerDiscountService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { ConsumerDiscount } from "../../../types/ConsumerDiscount";
import { RNQueryClient } from "../query-client";
import { useStore } from "zustand";

export const AddConsumerDiscount = () => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useMutation<
    ConsumerDiscount,
    Error,
    { merchantId: string; discountId: string }
  >({
    mutationFn: async (props: { merchantId: string; discountId: string }) => {
      const response = await consumerDiscountService.addConsumerDiscount(
        props.merchantId,
        props.discountId
      );

      return response.data;
    },
    onSuccess: (_, variables) => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CONSUMER_DISCOUNTS, variables.merchantId],
        exact: true,
      });
    },
  });
};

export const GetConsumerDiscount = (consumerDiscountId?: string) => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useQuery<ConsumerDiscount>({
    queryKey: [QUERY_KEYS.CONSUMER_DISCOUNT, consumerDiscountId],
    enabled: consumerDiscountId !== undefined,
    queryFn: async () => {
      if (consumerDiscountId) {
        try {
          const response: AxiosResponse =
            await consumerDiscountService.getConsumerDiscount(
              consumerDiscountId
            );

          return response.data;
        } catch (error) {
          return null;
        }
      }
    },
  });
};

export const GetConsumerDiscountsByMerchant = (merchantId?: string) => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useQuery<ConsumerDiscount[]>({
    queryKey: [QUERY_KEYS.CONSUMER_DISCOUNTS, merchantId],
    enabled: merchantId !== undefined,
    queryFn: async () => {
      if (merchantId) {
        try {
          const response =
            await consumerDiscountService.getConsumerDiscountsMerchant(
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

export const UpdateConsumerDiscount = () => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useMutation<
    ConsumerDiscount,
    Error,
    { consumerDiscount: ConsumerDiscount }
  >({
    mutationFn: async (props: { consumerDiscount: ConsumerDiscount }) => {
      const response = await consumerDiscountService.updateConsumerDiscount(
        props.consumerDiscount
      );

      return response.data;
    },
    onSuccess: (_, variables) => {
      RNQueryClient.invalidateQueries({
        queryKey: [
          QUERY_KEYS.CONSUMER_DISCOUNT,
          variables.consumerDiscount._id,
        ],
        exact: true,
      });
    },
  });
};


export const getConsumerDiscountsByMerchantConsumerDiscount = (
  merchantId: string,
  discountId: string,
  consumerId: string
) => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useQuery<ConsumerDiscount, Error>({
    queryKey: [
      QUERY_KEYS.CONSUMER_DISCOUNT,
      merchantId,
      discountId,
      consumerId,
    ],
    queryFn: async () => {
      try {
        const response: AxiosResponse<ConsumerDiscount> =
          await consumerDiscountService.getConsumerDiscountsByMerchantConsumerDiscount(
            merchantId,
            discountId,
            consumerId
          );
        const consumerDiscount: ConsumerDiscount = response.data;
        return consumerDiscount;
      } catch (error) {
        console.error("Error fetching consumer discount:", error);
        throw new Error("Failed to fetch consumer discount");
      }
    },
  });
};
