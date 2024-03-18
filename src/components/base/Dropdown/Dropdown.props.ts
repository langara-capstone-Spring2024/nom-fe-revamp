import { Option } from "./../../../types";

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  value: string;
  setValue?: (text: string) => void;
  error?: string;
}
