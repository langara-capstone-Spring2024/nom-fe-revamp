import { OperatingTime } from "../../../types/OperatingTime";

export interface RestaurantDetailProps {
  address: string;
  latitude: number;
  longitude: number;
  cuisineType: string;
  operatingTimes: OperatingTime[];
}
