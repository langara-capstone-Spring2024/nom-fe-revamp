import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import {
  Consumer,
  LoginPayload,
  Merchant,
  User,
  UserToken,
} from "../../../types";
import { AuthService } from "../../AuthService";
import { OperatingTime } from "../../../types/OperatingTime";

export const Signin = () => {
  const authService = new AuthService();
  authService.cancelRequests();

  return useMutation<UserToken, AxiosError, LoginPayload>({
    mutationFn: async (loginPayload: LoginPayload) => {
      const response: AxiosResponse = await authService.loginUser(loginPayload);

      return response.data;
    },
  });
};

export const Register = () => {
  const authService = new AuthService();
  authService.cancelRequests();

  return useMutation<
    User,
    Error,
    {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      role: string;
    }
  >({
    mutationFn: async (props: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      role: string;
    }) => {
      const response = await authService.register(
        props.email,
        props.password,
        props.firstName,
        props.lastName,
        props.role
      );

      return response.data;
    },
  });
};

export const AddMerchant = () => {
  const authService = new AuthService();
  authService.cancelRequests();

  return useMutation<
    Merchant,
    Error,
    {
      name: string;
      imageUrls: string[];
      description: string;
      address: string;
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
        | undefined;
      cost: 1 | 2 | 3 | 4;
      operatingTimes: OperatingTime[];
      isVerified: boolean;
      userId: string;
    }
  >({
    mutationFn: async (props: {
      name: string;
      imageUrls: string[];
      description: string;
      address: string;
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
        | undefined;
      cost: 1 | 2 | 3 | 4;
      operatingTimes: OperatingTime[];
      isVerified: boolean;
      userId: string;
    }) => {
      const response = await authService.addMerchant(
        props.name,
        props.imageUrls,
        props.description,
        props.address,
        props.cuisineType,
        props.cost,
        props.operatingTimes,
        props.isVerified,
        props.userId
      );

      return response.data;
    },
  });
};

export const AddConsumer = () => {
  const authService = new AuthService();
  authService.cancelRequests();

  return useMutation<Consumer, Error, { userId: string }>({
    mutationFn: async (props: { userId: string }) => {
      const response = await authService.addConsumer(props.userId);
      return response.data;
    },
  });
};
