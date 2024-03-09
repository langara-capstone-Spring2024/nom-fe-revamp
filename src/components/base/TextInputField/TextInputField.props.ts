import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface TextInputFieldProps extends TextInputProps {
  label?: string;
  value: string;
  setValue: (text: string) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  sizing?: "sm" | "md" | "lg";
  bgColor?: string;
  noborder?: boolean;
  rounded?: boolean;
  secured?: boolean;
  error?: string;
  isDarkMode?: boolean;
  onRightPress?: () => void;
  noClear?: boolean;
}
