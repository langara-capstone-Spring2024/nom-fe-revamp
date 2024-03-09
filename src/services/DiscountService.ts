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
      const storedDataString = await AsyncStorage.getItem("storage");
      let accessToken;
      if (storedDataString) {
        // Parse the JSON string into an object
        const storedData = JSON.parse(storedDataString) as {
          state: { accessToken: string };
        };

        accessToken = storedData?.state?.accessToken || null;
        console.log("accessToken: ", accessToken);
      } else {
        console.error("Error: storedDataString is null or undefined");
      }

      const res = await axios.post(
        "http://localhost:8000/api/discount",
        discountPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return res;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }
}
