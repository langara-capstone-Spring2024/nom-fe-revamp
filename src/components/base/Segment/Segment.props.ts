import { Option } from "../../../types";

export interface SegmentProps {
  option: Option;
  options: Option[];
  onSelect?: (option: Option) => void;
}
