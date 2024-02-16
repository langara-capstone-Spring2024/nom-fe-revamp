import axios from "axios";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";
import { User } from "../types";

export class UserService extends BaseService {
  async getUser() {
    const response = await apiClient.get("api/user");

    return response;
  }

  async getMerchants() {
    const response = await apiClient.get("api/merchants");

    return response;
  }

  async changeImage(partialUser: Partial<User>) {
    const response = await apiClient.put("api/image", partialUser);

    return response;
  }
}
