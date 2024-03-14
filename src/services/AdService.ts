import { AdPaylaod } from "../types";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class AdService extends BaseService {
  async getPrices() {
    const response = await apiClient.get("api/ad/price");
    return response;
  }

  async generateAiText(description: string) {
    const response = await apiClient.post("/api/ad/generate-ad", {
      description,
    });
    return response;
  }

  async createAd(payload: AdPaylaod) {
    const response = await apiClient.post("/api/ad", payload);
    return response;
  }
}
