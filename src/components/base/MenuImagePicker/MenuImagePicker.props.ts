import { Image } from "../../../types/Image";

export interface MenuImagePickerProps {
  image?: Image;
  setImage: (image: Image | undefined) => void;
}
