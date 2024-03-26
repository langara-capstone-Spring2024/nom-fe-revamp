import axios from "axios";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";
import FormData from "form-data";

export class UserService extends BaseService {
  async getMerchants(keyword: string) {
    const response = await apiClient.get("api/merchants", {
      params: { keyword: keyword || null },
    });

    return response;
  }

  async getMerchant(merchantId: string) {
    const response = await apiClient.get("api/merchant", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }

  async addImage(formData: FormData) {
    // const response = await apiClient.post("api/upload-multi", formData);

    const response = await axios.post(
      "http://localhost:8000/api/upload-multi",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  }

  async getConsumer(consumerId: string) {
    const response = await apiClient.get("api/consumer", {
      params: {
        consumerId: consumerId,
      },
    });

    return response;
  }
}
