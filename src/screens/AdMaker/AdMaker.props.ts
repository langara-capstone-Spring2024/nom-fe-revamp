import { Dispatch, SetStateAction } from "react";
import { Image } from "../../types/Image";

export interface AdMakerGeneratedProps {
  localImage?: Image;
  handleImageChange: (image?: Image | undefined) => void;

  next: () => void;
  prev: () => void;
  page: number;
}
