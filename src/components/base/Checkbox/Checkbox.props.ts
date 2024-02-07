import { Dispatch, SetStateAction } from "react";

export interface CheckboxProps {
  checkBoxValue: boolean;
  setCheckBoxValue: Dispatch<SetStateAction<boolean>>;
  label?: string;
}
