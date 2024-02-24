import { Image } from "../../../types/Image";
import { Dispatch, SetStateAction } from "react";

export interface AdImagePickerProps {
  image?: Image;
  setImage: (image: Image | undefined) => void;
}
