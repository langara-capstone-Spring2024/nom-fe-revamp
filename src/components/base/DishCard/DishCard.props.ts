export interface DishCardProps {
  imageUrl: string;
  dishName: string;
  rating: number;
  distance?: string;
  cityName: string;
  discountAmount: number;
  cost: number;
  bordered?: boolean;
}
