import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { ConsumerDiscountService } from "../../ConsumerDiscountService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { ConsumerDiscount } from "../../../types/ConsumerDiscount";


export const GetConsumerDiscountsById = (consumerDiscountId: string) => {
  const consumerDiscountService = new ConsumerDiscountService();
  consumerDiscountService.cancelRequests();

  
  return useQuery({
    queryKey: [QUERY_KEYS.CONSUMER_DISCOUNTS, consumerDiscountId],
    queryFn: async () => {
      try {
        const response: AxiosResponse = await consumerDiscountService.getConsumerDiscountById(
            consumerDiscountId
        );
        const consumerDiscount: ConsumerDiscount = response.data;
        return consumerDiscount;
      } catch (error) {
        console.error("Error fetching discount:", error);
        throw error;
      }
    },
  });
};
