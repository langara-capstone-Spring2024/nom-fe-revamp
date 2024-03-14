import { useMutation, useQuery } from "@tanstack/react-query";
import { ConsumerDiscountService } from "../../ConsumerDiscountService";
import { ConsumerDiscount } from "../../../types/ConsumerDiscount";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";

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
  });
};

export const GetConsumerDiscount = (consumerDiscountId: string) => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  return useQuery<ConsumerDiscount>({
    queryKey: [QUERY_KEYS.CONSUMER_DISCOUNT, consumerDiscountId],
    enabled: consumerDiscountId !== undefined,
    queryFn: async () => {
      try {
        const response: AxiosResponse =
          await consumerDiscountService.getConsumerDiscount(consumerDiscountId);

        return response.data;
      } catch (error) {
        return null;
      }
    },
  });
};

export const GetConsumerDiscountsByMerchant = (merchantId: string) => {
  const menuDiscountService = new ConsumerDiscountService();
  menuDiscountService.cancelRequests();

  return useQuery<ConsumerDiscount[]>({
    queryKey: [QUERY_KEYS.CONSUMER_DISCOUNTS, merchantId],
    enabled: merchantId !== undefined,
    queryFn: async () => {
      try {
        const response = await menuDiscountService.getConsumerDiscountsMerchant(
          merchantId
        );

        return response.data;
      } catch (error) {
        return [];
      }
    },
  });
};
