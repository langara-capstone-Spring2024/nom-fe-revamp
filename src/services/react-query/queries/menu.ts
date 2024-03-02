import { useQuery } from "@tanstack/react-query";
import { MenuService } from "./../../MenuService";
import { QUERY_KEYS } from "../../../config/query-keys";

export const GetMenu = () => {
  const menuService = new MenuService();

  return useQuery({
    queryKey: [QUERY_KEYS.MENUS],
    queryFn: async () => {
      try {
        const response = await menuService.getMenu(); 
        return response.data;
      } catch (error) {
        return { error: error.message }; 
      }
    },
  });
};
