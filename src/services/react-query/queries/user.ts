import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserService } from "../../UserService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import FormData from "form-data";
import { Merchant } from "../../../types";

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
