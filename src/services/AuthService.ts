import { LoginPayload } from "../types";
import { OperatingTime } from "../types/OperatingTime";
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

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: string
  ) {
    const response = await apiClient.post("auth/register", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role,
    });

    return response;
  }

  async addMerchant(
    name: string,
    imageUrls: string[],
    description: string,
    address: string,
    cuisineType:
      | "American"
      | "Chinese"
      | "Indian"
      | "Italian"
      | "Japanese"
      | "Korean"
      | "Mexican"
      | "Thai"
      | "Others"
      | undefined,
    cost: 1 | 2 | 3 | 4,
    operatingTimes: OperatingTime[],
    isVerified: boolean,
    userId: string
  ) {
    const response = await apiClient.post("auth/merchant", {
      name: name,
      imageUrls: imageUrls,
      description: description,
      address: address,
      cuisineType: cuisineType,
      cost: cost,
      operatingTimes: operatingTimes,
      isVerified: isVerified,
      userId: userId,
    });

    return response;
  }

  async addConsumer(userId: string) {
    const response = await apiClient.post("auth/consumer", {
      userId: userId,
    });

    return response;
  }
}
