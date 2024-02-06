import { LoginPayload } from "../types";
import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class AuthService extends BaseService {
  async loginUser(data: LoginPayload) {
    const response = await apiClient.post("auth/login", data);
    // console.log("response " + response.status);
    return response;
  }

  async logoutUser() {
    const response = await apiClient.post("auth/logout");
    return response;
  }

  async changePassword(
    email: string,
    currentPassword: string,
    newPassword: string
  ) {
    const response = await apiClient.put("auth/change-password", {
      email: email,
      currentPassword: currentPassword,
      newPassword: newPassword,
    });
    console.log("response " + response.status);
    return response;
  }
}
