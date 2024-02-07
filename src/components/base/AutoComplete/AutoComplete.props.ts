import { Place } from "../../../types";
import { Dispatch, SetStateAction } from "react";

export interface AutoCompleteProps {
  placeholder?: string;
  value?: Place;
  setValue: Dispatch<SetStateAction<Place | undefined>>;
}
