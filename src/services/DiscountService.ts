import axios from "axios";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";
import { Discounts } from "../types/Discounts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class DiscountService extends BaseService {
  async getAllActiveDiscount() {
    try {
      const res = await apiClient.get("api/active-discount");
      return res.data;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }

  async getActiveDiscountsByMerchant(merchantId: string) {
    const response = await apiClient.get("api/active-discounts/merchant", {
      params: {
        merchantId: merchantId,
      },
    });

    return response;
  }

  async getDiscount(discountId: string) {
    try {
      const res = await apiClient.get(`api/discount/${discountId}`);
      return res.data;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }

  async addDiscount(discountPayload: Discounts) {
    try {
      const res = await apiClient.post("api/discount", discountPayload);
      return res;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }
}
