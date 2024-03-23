import { Place } from "../../../types";
import { Dispatch, SetStateAction } from "react";

export interface AutoCompleteProps {
  label?: string;
  placeholder?: string;
  sizing?: "sm" | "md" | "lg";
  value?: Place;
  setValue: (place: Place) => void;
  error?: string;
}
