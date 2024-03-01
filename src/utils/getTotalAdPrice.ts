import { AdPrice } from "../types";

export const calculateTotalAdPrice = (
  reference?: AdPrice[],
  daysOfWeek?: string[]
): number => {
  const totalPricePerDay: Record<string, number> = {};

  daysOfWeek?.forEach((day) => {
    totalPricePerDay[day] = 0;
  });

  reference?.forEach((item) => {
    const { label, price } = item;
    totalPricePerDay[label] += price;
  });

  let totalAccumulatedPrice = 0;
  daysOfWeek?.forEach((day) => {
    totalAccumulatedPrice += totalPricePerDay[day];
  });

  return totalAccumulatedPrice;
};
