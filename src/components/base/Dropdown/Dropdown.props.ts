import { Option } from "./../../../types";

export interface DropdownProps {
  placeholder: string;
  options: Option[];
  value: string;
  setValue?: (text: string) => void;
}
