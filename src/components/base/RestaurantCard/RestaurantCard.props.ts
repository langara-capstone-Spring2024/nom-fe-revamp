export interface RestaurantCardProps {
  imageUrl: string;
  restaurantName: string;
  cost: number;
  rating: number;
  cuisineType: string;
  distance: string;
  cityName: string;
  coupons: { time: string; amount: number }[];
}
