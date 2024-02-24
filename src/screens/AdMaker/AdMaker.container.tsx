import AdMakerView from "./AdMaker.view";
import { useState } from "react";
import { Image } from "../../types";

const AdMaker = () => {
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);
  const handleImageChange = (image?: Image | undefined) => {
    setLocalImage(image);
    // Here you can save the image details to your form data or state
    // Example:
    // form.append('image', image);
  };

  const generatedProps = {
    // generated props here
    handleImageChange,
    localImage
  };
  return <AdMakerView {...generatedProps} />;
};

export default AdMaker;
