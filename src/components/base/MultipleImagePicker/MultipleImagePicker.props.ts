import { Image } from "../../../types";
import { Dispatch, SetStateAction } from "react";

export interface MultipleImagePickerProps {
  images: Image[];
  setImages: Dispatch<SetStateAction<Image[]>>;
}
