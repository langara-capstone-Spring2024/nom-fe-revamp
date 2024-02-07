import { Image } from "../../../types/Image";
import { Dispatch, SetStateAction } from "react";

export interface SingleImagePickerProps {
  image?: Image;
  setImage: Dispatch<SetStateAction<Image | undefined>>;
}
