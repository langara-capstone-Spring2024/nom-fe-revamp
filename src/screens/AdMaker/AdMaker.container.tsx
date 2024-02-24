import AdMakerView from "./AdMaker.view";
import { useState, useEffect } from "react";
import { Image } from "../../types";
import { colorKit } from "reanimated-color-picker";
import { useSharedValue } from "react-native-reanimated";
import type { returnedResults } from "reanimated-color-picker";

const AdMaker = () => {
  const [page, setPage] = useState(1);

  const next = () => {
    setPage((prev) => prev + 1);
  };

  const prev = () => {
    setPage((prev) => prev - 1);
  };

  //start of page 1
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);
  const handleImageChange = (image?: Image | undefined) => {
    setLocalImage(image);
    // Here you can save the image details to your form data or state
    // Example:
    // form.append('image', image);
  };

  //end of page 1

  //start of page 2
  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);

  const onColorSelect = (color: returnedResults) => {
    "worklet";
    selectedColor.value = color.hex;
    console.log("This is the color", color.hex);
  };

  //end of page 2

  const generatedProps = {
    // generated props here
    handleImageChange,
    localImage,
    next,
    prev,
    page,
    onColorSelect,
    selectedColor,
    customSwatches,
  };
  return <AdMakerView {...generatedProps} />;
};

export default AdMaker;
