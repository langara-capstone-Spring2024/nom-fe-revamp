import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL || "http://172.20.10.10:8000/",
  responseType: "json",
  withCredentials: true,
});

interface AppState {
  state: {
    count: number;
    isLoggedIn: boolean;
    userId: number;
    accessToken: string;
    refreshToken: string;
  };
  version: number;
}

apiClient.interceptors.request.use(
  async (config) => {
    try {
      const storedData: string | null = await AsyncStorage.getItem("storage");
      const parsedData: AppState | null = storedData
        ? (JSON.parse(storedData) as AppState)
        : null;
      const accessToken = parsedData?.state.accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      config.headers["Content-Type"] = "application/json";
      config.headers["Accept"] = "application/json";
    } catch (error) {
      console.error("Error retrieving access token from AsyncStorage:", error);
    }

    return Promise.resolve(config); // Resolve the config wrapped in a Promise
  },
  async (error) => {
    // Handle request interceptor errors
    return Promise.reject(error);
  }
);

export { apiClient };
