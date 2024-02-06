import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createLoginSlice, ILoginSlice } from "./createLoginSlice";
import { createCounterSlice, ICounterSlice } from "./createCounterSlice";

interface IStore extends ILoginSlice, ICounterSlice {
  displayAsyncStorageData(): unknown;
}

/**
 * Make sure to enforce type for each slice
 */

export const useStore = create<IStore>()(
  persist(
    (set, get, api) => ({
      ...createCounterSlice(set, get, api),
      ...createLoginSlice(set, get, api),
      // for testing purposes, displaying the AsyncStorage Data
      displayAsyncStorageData: async () => {
        try {
          const storedData = await AsyncStorage.getItem("storage");
          // console.log("AsyncStorage Data:", storedData);
        } catch (error) {
          console.error("Error:", error);
        }
      },
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);