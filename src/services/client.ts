import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000/",
  responseType: "json",
  withCredentials: true,
});

apiClient.interceptors.request.use(
  async (config) => {
    const store = await AsyncStorage.getItem("app-storage");
    const { state } = JSON.parse(store as string);
    if (state.accessToken) {
      config.headers.Authorization = `Bearer ${state.accessToken}`;
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      config.headers["Accept"] = "application/json";
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export { apiClient };
