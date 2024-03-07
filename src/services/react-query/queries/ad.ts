import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import { AdService } from "../../AdService";
import { AdPrice } from "../../../types";
import { AxiosResponse } from "axios";

export const GetPrices = () => {
  const adService = new AdService();
  adService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.AD],
    queryFn: async () => {
      const response: AxiosResponse<AdPrice[]> = await adService.getPrices();
      return response.data;
    },
  });
};

export const GeneratetAiText = () => {
  const adService = new AdService();
  adService.cancelRequests();

  return useMutation({
    mutationFn: async (payload: string) => {
      const response: AxiosResponse = await adService.generateAiText(payload);
      return response.data;
    },
    onSuccess: () => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.AD],
        exact: true,
      });
    },
  });
};
