import AdMakerView from "./AdMaker.view";
import { useState, useEffect } from "react";
import { Image } from "../../types";

const AdMaker = () => {
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);
  const handleImageChange = (image?: Image | undefined) => {
    setLocalImage(image);
    // Here you can save the image details to your form data or state
    // Example:
    // form.append('image', image);
  };

  const [page, setPage] = useState(1);

  const next = () => {
    setPage((prev) => prev + 1);
  };

  const prev = () => {
    setPage((prev) => prev - 1);
  };

  const generatedProps = {
    // generated props here
    handleImageChange,
    localImage,
    next,
    prev,
    page
  };
  return <AdMakerView {...generatedProps} />;
};

export default AdMaker;
