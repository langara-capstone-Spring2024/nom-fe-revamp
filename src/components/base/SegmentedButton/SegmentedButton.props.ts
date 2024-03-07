import { GestureResponderEvent } from "react-native";

export interface SegmentedButtonProps {
  value: String;
  onValueChange?: (text: string) => void;
//   onPress?: (event?: GestureResponderEvent) => void;
}
