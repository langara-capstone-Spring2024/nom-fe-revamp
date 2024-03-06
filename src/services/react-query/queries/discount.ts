import { useQuery } from "@tanstack/react-query";
import { DiscountService } from "../../DiscountService";
import { QUERY_KEYS } from "../../../config/query-keys";
import { AxiosResponse } from "axios";
import { Discounts, FormattedDiscount } from "../../../types/Discounts";

export const GetAllActiveDiscount = () => {
  const discountService = new DiscountService();

  return useQuery({
    queryKey: [QUERY_KEYS.DISCOUNT],
    queryFn: async () => {
      try {
        const response: AxiosResponse =
          await discountService.getAllActiveDiscount();

        const formattedDiscount: FormattedDiscount[] = response.data.map(
          (item: Discounts) => {
            const discount =
              parseFloat(item.percentDiscount.$numberDecimal) * 10;

            return {
              title: new Date(item.validFromDate),
              data: [
                {
                  title: item.label || "",
                  startTime: new Date(item.validFromTime).toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit" }
                  ),
                  endTime: new Date(item.validToTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  discount: discount,
                  menuCount: 5,
                },
              ],
            };
          }
        );

        return formattedDiscount;
      } catch (error) {
        console.error("Error fetching discounts:", error);
        throw error;
      }
    },
  });
};
