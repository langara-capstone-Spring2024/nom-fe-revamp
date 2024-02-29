import { TextInputProps } from "react-native";

export interface TextAreaProps extends TextInputProps {
  value: string;
  setValue: (v: string) => void;
  label: string;
  placeholder?: string;
}
