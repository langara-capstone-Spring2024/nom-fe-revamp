import axios from "axios";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class AdService extends BaseService {
  async getPrices() {
    const response = await apiClient.get("api/ad/price");
    return response;
  }
}
