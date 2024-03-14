import { useQueries, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { QUERY_KEYS } from "../../../config/query-keys";
import { Merchant } from "../../../types";
import { RatingService } from "../../RatingService";
import { Rating } from "../../../types/Rating";

export const GetRatingsByMerchants = (merchants: Merchant[]) => {
  const ratingService = new RatingService();
  ratingService.cancelRequests();

  return useQueries<
    any,
    {
      data: Rating[];
      isSuccess: boolean;
      isError: boolean;
    }[]
  >({
    queries: merchants.map((merchant) => ({
      queryKey: [QUERY_KEYS.RATINGS, merchant._id],
      queryFn: async () => {
        try {
          const response: AxiosResponse =
            await ratingService.getRatingsMerchant(merchant._id);

          return response.data;
        } catch (error) {
          return [];
        }
      },
    })),
  });
};

export const GetRatingsByMerchant = (merchantId: string) => {
  const ratingService = new RatingService();
  ratingService.cancelRequests();

  return useQuery<Rating[]>({
    queryKey: [QUERY_KEYS.RATINGS, merchantId],
    queryFn: async () => {
      try {
        const response = await ratingService.getRatingsMerchant(merchantId);
        return response.data;
      } catch (error) {
        return null;
      }
    },
  });
};
