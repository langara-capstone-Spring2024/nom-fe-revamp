import { useQuery, useMutation } from "@tanstack/react-query";
import { MenuService } from "./../../MenuService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { RNQueryClient } from "../query-client";
import FormData from "form-data";
import { Menus } from "../../../types";

export const GetMenu = () => {
  const menuService = new MenuService();

  return useQuery({
    queryKey: [QUERY_KEYS.MENUS],
    queryFn: async () => {
      try {
        const response = await menuService.getMenu();
        return response.data;
      } catch (error) {
        return { error };
      }
    },
  });
};

export const addMenuItem = () => {
  const menuService = new MenuService();
  menuService.cancelRequests();

  return useMutation({
    mutationFn: async (formData) => { 
      const {
        imageUrl,
        name,
        originalPrice,
        description,
      } = formData; 
      
      const response = await menuService.addMenuItem(
        imageUrl,
        name,
        originalPrice,
        description,
      );

      return response.data;
    },
    onSuccess: () => {
      RNQueryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.MENUS],
        exact: true,
      });
    },
    onError: (error, variables, context) => {
      console.error("Error adding menu item:", error);
    },
  });
};

