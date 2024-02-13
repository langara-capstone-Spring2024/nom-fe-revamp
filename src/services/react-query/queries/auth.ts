import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { apiClient } from "../../client";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import { LoginPayload, UserToken } from "../../../types";
import { AuthService } from "../../AuthService";

export const useLoginMutation = () => {
  const authService = new AuthService();
  authService.cancelRequests();

  return useMutation<UserToken, AxiosError, LoginPayload>({
    mutationFn: async (loginPayload: LoginPayload) => {
      const response: AxiosResponse = await authService.loginUser(loginPayload);
      return response.data;
    },
    onSuccess: (data) => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.AUTH, data.refreshToken],
      });
    },
  });
};
