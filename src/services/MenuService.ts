import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class MenuService extends BaseService {
  async getMenu() {
    const response = await apiClient.get("api/menu");
    return response.data;
  }

  async addMenuItem(
    imageUrl: String,
    name: String,
    originalPrice: String,
    description: String
  ) {
    const response = await apiClient.post("api/menu", {
      imageUrl: imageUrl,
      name: name,
      originalPrice: originalPrice,
      description: description,
    });
    return response.data;
  }
}
