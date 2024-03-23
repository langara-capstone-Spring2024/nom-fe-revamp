import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import { AdService } from "../../AdService";
import { AdPaylaod, AdPrice } from "../../../types";
import { AxiosResponse } from "axios";
import { Ad } from "../../../types/Ad";

export const GetAds = () => {
  const adService = new AdService();
  adService.cancelRequests();

  return useQuery<Ad[]>({
    queryKey: [QUERY_KEYS.ADS],
    queryFn: async () => {
      try {
        const response = await adService.getAds();

        return response.data;
      } catch (error) {
        return [];
      }
    },
  });
};

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

export const CreateAd = () => {
  const adService = new AdService();
  adService.cancelRequests();

  return useMutation({
    mutationFn: async (payload: AdPaylaod) => {
      const response: AxiosResponse = await adService.createAd(payload);
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
