import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class UserService extends BaseService {
  async getUsers() {
    const response = await apiClient.get("api/users");

    return response;
  }
}
