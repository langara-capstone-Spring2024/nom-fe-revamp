import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserService } from "../../UserService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import FormData from "form-data";
import { Merchant, Consumer } from "../../../types";

export const GetMerchants = (keyword: string) => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery<Merchant[]>({
    queryKey: [QUERY_KEYS.MERCHANTS, keyword],
    queryFn: async () => {
      try {
        const response: AxiosResponse = await userService.getMerchants(keyword);

        return response.data;
      } catch (error) {
        return [];
      }
    },
  });
};

export const GetMerchant = (merchantId?: string) => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery<Merchant>({
    queryKey: [QUERY_KEYS.MERCHANT, merchantId],
    enabled: merchantId !== undefined,
    queryFn: async () => {
      if (merchantId) {
        try {
          const response: AxiosResponse = await userService.getMerchant(
            merchantId
          );

          return response.data;
        } catch (error) {
          return null;
        }
      }
    },
  });
};

export const AddImage = () => {
  const userService = new UserService();
  userService.cancelRequests();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response: AxiosResponse = await userService.addImage(formData);
      return response.data;
    },
    onSuccess: (data) => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.IMAGES],
        exact: true,
      });
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
};

export const GetConsumer = (consumerId?: string) => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery<Consumer>({
    queryKey: [QUERY_KEYS.CONSUMER, consumerId],
    enabled: consumerId !== undefined,
    queryFn: async () => {
      if (consumerId) {
        try {
          const response: AxiosResponse = await userService.getConsumer(
            consumerId
          );

          return response.data;
        } catch (error) {
          return null;
        }
      }
    },
  });
};
