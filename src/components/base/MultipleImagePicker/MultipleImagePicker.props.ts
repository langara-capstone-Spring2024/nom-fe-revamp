import { Image } from "../../../types";

export interface MultipleImagePickerProps {
  images: Image[];
  setImages: (image: Image[]) => void;
  error?: string;
}
