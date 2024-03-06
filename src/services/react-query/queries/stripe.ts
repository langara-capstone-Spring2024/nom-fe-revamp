import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { StripeService } from "../../StripeService";
import { RNQueryClient } from "../query-client";
import { QUERY_KEYS } from "../../../config/query-keys";

export const AddPaymentMethod = () => {
  const stripeService = new StripeService();
  stripeService.cancelRequests();

  return useMutation({
    mutationFn: async (payload: any) => {
      const response: AxiosResponse = await stripeService.addPaymentMethod(
        payload
      );
      return response.data;
    },
    onSuccess: () => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.STRIPE_CARDS],
        exact: true,
      });
    },
  });
};

export const GetAllSavedCards = () => {
  const stripeService = new StripeService();
  stripeService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.STRIPE_CARDS],
    queryFn: async () => {
      const response: AxiosResponse = await stripeService.getAllSavedCards();
      return response.data;
    },
  
  });
};
