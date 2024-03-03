import { GestureResponderEvent } from "react-native";

export interface ItemListProps {
  title: string;
  subtitle: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}
