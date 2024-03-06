import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class DiscountService extends BaseService {
  async getAllActiveDiscount() {
    try {
      const res = await apiClient.get("api/activeDiscount");
      return res.data;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }
}
