import { StateCreator } from "zustand";

export interface ILoginSlice {
  isLoggedIn: boolean;
  userId: number;
  accessToken: string | null;
  refreshToken: string | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  merchantId: string;
  setMerchantId: (merchantId: string) => void;
  consumerId: string;
  setConsumerId: (consumerId: string) => void;
}

export const createLoginSlice: StateCreator<ILoginSlice> = (set) => ({
  isLoggedIn: false,
  userId: 10,
  accessToken: null,
  refreshToken: null,
  setIsLoggedIn: (isLoggedIn): void => {
    set({ isLoggedIn });
  },
  setTokens: (accessToken, refreshToken): void => {
    set({ accessToken, refreshToken });
  },
  merchantId: "",
  setMerchantId: (merchantId): void => {
    set({ merchantId });
  },
  consumerId: "",
  setConsumerId: (consumerId): void => {
    set({ consumerId });
  },
});

// Export setTokens function for external use
