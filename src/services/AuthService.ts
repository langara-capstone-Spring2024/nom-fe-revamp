import { BaseService } from "./BaseService";
import { apiClient } from "./client";

export class AuthService extends BaseService {
  async loginUser(email: string, password: string) {
    const response = await apiClient.post("auth/login", {
      email: email,
      password: password,
    });
    // console.log("response " + response.status);
    return response;
  }

  async logoutUser() {
    const response = await apiClient.post("auth/logout");
    return response;
  }

  async changePassword(email: string, currentPassword: string, newPassword: string) {
    const response = await apiClient.put("auth/change-password", {
      email: email,
      currentPassword: currentPassword,
      newPassword: newPassword
    });
    console.log("response " + response.status);
    return response;
  }
}
