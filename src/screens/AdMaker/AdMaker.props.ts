import { Dispatch, SetStateAction } from "react";
import { Image } from "../../types/Image";
import { returnedResults } from "reanimated-color-picker";
import { SharedValue } from "react-native-reanimated";

export interface AdMakerGeneratedProps {
  localImage?: Image;
  handleImageChange: (image?: Image | undefined) => void;

  next: () => void;
  prev: () => void;
  page: number;

  selectedColor: SharedValue<string>;
  customSwatches: string[];
  onColorSelect: (color: returnedResults) => void;
}
