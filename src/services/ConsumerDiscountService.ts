import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class ConsumerDiscountService extends BaseService {
  async getConsumerDiscountById(id: string) {
    const response = await apiClient.get(`api/consumer-discounts/${id}`);
    return response;
  }
}
