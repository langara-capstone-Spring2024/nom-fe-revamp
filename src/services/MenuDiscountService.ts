import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class MenuDiscountService extends BaseService {
  async getMenuDiscountsMerchant(merchantId: string) {
    const response = await apiClient.get("api/menu-discounts/merchant", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }

  async getMenuDiscountsDiscount(discountId: string) {
    const response = await apiClient.get("api/menu-discounts/discount", {
      params: {
        discountId: discountId,
      },
    });

    return response;
  }

  async getMenuDiscountsByMerchantAndDiscount(
    merchantId: string,
    discountId: string
  ) {
    const response = await apiClient.get(
      `api/menu-discounts/merchant/${merchantId}/discount/${discountId}`
    );

    return response;
  }
}
