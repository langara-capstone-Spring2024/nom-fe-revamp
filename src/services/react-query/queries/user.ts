import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserService } from "../../UserService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import { User, Merchant } from "../../../types";

export const GetUser = () => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery<User>({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const response: AxiosResponse = await userService.getUser();
      return response.data;
    },
  });
};

export const GetMerchants = () => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery<Merchant[]>({
    queryKey: [QUERY_KEYS.MERCHANTS],
    queryFn: async () => {
      const response: AxiosResponse = await userService.getMerchants();
      return response.data;
    },
  });
};

export const ChangeImage = () => {
  const userService = new UserService();
  userService.cancelRequests();

  return useMutation<any, Error, Partial<User>>({
    mutationFn: async (partialUser) => {
      const response: AxiosResponse = await userService.changeImage(
        partialUser
      );
      return response?.data;
    },
    onSuccess: (data) => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.IMAGES],
        exact: true,
      });
    },
  });
};
