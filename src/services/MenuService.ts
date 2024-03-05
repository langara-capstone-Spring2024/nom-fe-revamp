import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class MenuService extends BaseService {
  async getMenu() {
    try {
      const response = await apiClient.get("api/menu");
      return response.data;
    } catch (error) {
      console.error("Error fetching menu:", error);
      throw error;
    }
  }
}
