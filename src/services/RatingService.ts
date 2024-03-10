import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class RatingService extends BaseService {
  async getRatingsMerchant(merchantId: string) {
    const response = await apiClient.get("api/ratings/merchant", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }
}
