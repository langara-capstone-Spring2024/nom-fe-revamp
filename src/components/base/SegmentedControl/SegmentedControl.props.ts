import { Option } from "../../../types";

export interface SegmentedControlProps {
  option: Option;
  options: Option[];
  onSelectOption?: (option: Option) => void;
}
