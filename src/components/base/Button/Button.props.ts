import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  text: React.ReactNode;
  variant: Variants;
  iconPosition?: IconPosition;
  icon?: React.ReactNode;
  buttonSize: ButtonSize;
  takeFullWidth?: boolean;
  onPress?: (event?: GestureResponderEvent) => void;
  isDisabled?: boolean;
}

export type Variants = "primary" | "secondary" | "tertiary" | "ghost";

export type IconPosition = "left" | "right" | null;

export type ButtonSize = "sm" | "md" | "lg";
