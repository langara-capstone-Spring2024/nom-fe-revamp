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
