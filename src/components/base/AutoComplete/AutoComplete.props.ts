import { Place } from "../../../types";

export interface AutoCompleteProps {
  label?: string;
  placeholder?: string;
  value?: Place;
  setValue: (place: Place) => void;
  error?: string;
}
