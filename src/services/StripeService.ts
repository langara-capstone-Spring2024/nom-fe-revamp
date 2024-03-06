import { BaseService } from "./BaseService";
import { apiClient } from "./client";

type PaymentMethod = {
  paymentMethodId: string;
};

export class StripeService extends BaseService {
  async addPaymentMethod(paymentMethodId: PaymentMethod) {
    const response = await apiClient.post("api/stripe-card", {
      paymentMethodId,
    });

    return response;
  }

  async getAllSavedCards() {
    const response = await apiClient.get("api/stripe-saved-cards");
    return response;
  }
}
