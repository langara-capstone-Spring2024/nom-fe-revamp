import { useQuery, useMutation } from "@tanstack/react-query";
import { MenuService } from "./../../MenuService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { RNQueryClient } from "../query-client";
import FormData from "form-data";
import { Menus } from "../../../types";

export const GetMenu = () => {
  const menuService = new MenuService();
  menuService.cancelRequests();

  return useQuery({
    queryKey: [QUERY_KEYS.MENUS],
    queryFn: async () => {
      const response = await menuService.getMenu();
      return response.data;
    },
  });
};

export const addMenuItem = () => {
  const menuService = new MenuService();
  menuService.cancelRequests();

  return useMutation({
    mutationFn: async ({
      formData,
    }: {
      formData: {
        imageUrl?: string;
        name: string;
        originalPrice: string;
        description?: string;
      };
    }) => {
      const { imageUrl, name, originalPrice, description } = formData;

      const response = await menuService.addMenuItem(
        imageUrl !== undefined ? imageUrl : "",
        name,
        originalPrice,
        description !== undefined ? description : ""
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
