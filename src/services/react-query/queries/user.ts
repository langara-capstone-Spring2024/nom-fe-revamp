import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserService } from "../../UserService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import FormData from "form-data";

export const GetUsers = () => {
  const userService = new UserService();
  userService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const response: AxiosResponse = await userService.getUsers();
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
        queryKey: [QUERY_KEYS.USER, "images"],
        exact: true,
      });
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
};
