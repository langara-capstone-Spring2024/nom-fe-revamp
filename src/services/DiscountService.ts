import axios from "axios";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";
import { Discounts } from "../types/Discounts";

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
      const res = await axios.post("api/discount", discountPayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.data;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }
}
