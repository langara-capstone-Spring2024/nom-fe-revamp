import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class RatingService extends BaseService {
  async getRatings(merchantId: string) {
    const response = await apiClient.get("api/rating", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }
}
