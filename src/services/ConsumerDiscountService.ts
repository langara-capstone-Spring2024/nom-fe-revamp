import { ConsumerDiscount } from "../types/ConsumerDiscount";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class ConsumerDiscountService extends BaseService {
  async addConsumerDiscount(merchantId: string, discountId: String) {
    const response = await apiClient.post("api/consumer-discount", {
      merchantId: merchantId,
      discountId: discountId,
    });

    return response;
  }

  async getConsumerDiscount(consumerDiscountId: string) {
    const response = await apiClient.get("api/consumer-discount", {
      params: {
        consumerDiscountId: consumerDiscountId,
      },
    });

    return response;
  }

  async getConsumerDiscountsMerchant(merchantId: string) {
    const response = await apiClient.get("api/consumer-discounts/merchant", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }

  async updateConsumerDiscount(consumerDiscount: ConsumerDiscount) {
    const response = await apiClient.put("api/consumer-discount", {
      consumerDiscount: consumerDiscount,
    });

    return response;
  }
}




