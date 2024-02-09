import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

export interface ButtonProps {
  text: React.ReactNode;
  variant?: Variants;
  iconPosition?: IconPosition;
  icon?: React.ReactNode;
  buttonSize?: ButtonSize;
  takeFullWidth?: boolean;
  onPress?: (event?: GestureResponderEvent) => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle | TextStyle>;
}

export type Variants = "primary" | "secondary" | "error" | "ghost";

export type IconPosition = "left" | "right" | null;

export type ButtonSize = "sm" | "md" | "lg";
