import { Option } from "./../../../types";

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  sizing?: "sm" | "md" | "lg";
  options: Option[];
  value: string;
  setValue?: (text: string) => void;
  error?: string;
}
