import React from "react";
import MenuView from "./Menu.view";
import { GetMenu } from "./../../services/react-query/queries/menu";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import { Image } from "../../types";
import { UploadImage } from "../../services/react-query/queries/s3";
import { v4 as uuidv4 } from "uuid";
import { S3Params } from "../../types/S3Params";

const Menu = () => {
  const {
    mutate: uploadImageMutate,
    data: uploadImageData,
    isPending,
  } = UploadImage();

  const { setMenuScreen, isAddingMenuItem, setIsAddingMenuItem } = useStore(
    (state) => ({
      setMenuScreen: state.setMenuScreen,
      isAddingMenuItem: state.isAddingMenuItem,
      setIsAddingMenuItem: state.setIsAddingMenuItem,
    })
  );
  const [localImage, setLocalImage] = useState<Image>();
  const handleImageChange = (image?: Image) => {
    setLocalImage(image);
  };

  const [name, onNameChange] = useState<string>("");
  const [price, onPriceChange] = useState<string>("");
  const [description, onDescriptionChange] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");

  useEffect(() => {
    setMenuScreen(true);
  }, []);

  useState();
  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }
  

  const onPressAddItem = async () => {
    if (localImage) {
      const uuid = uuidv4();
      const response = await fetch(localImage.uri || "");
      const blob = await response.blob();
      const contentType = response.headers.get("Content-Type");

      if (!contentType) return;
      const params: S3Params = {
        Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME || "",
        Key: `uploads/${uuid}`,
        Body: blob,
        ContentType: contentType,
      };
      uploadImageMutate(params);
    }
  };

  useEffect(() => {
    if (uploadImageData) {
      console.log(uploadImageData);

      // add to mongodb
    }
  }, [uploadImageData]);

  const generatedProps = {
    localImage: localImage,
    handleImageChange: handleImageChange,
    name: name,
    onNameChange: onNameChange,
    price: price,
    onPriceChange: onPriceChange,
    description: description,
    onDescriptionChange: onDescriptionChange,
    isAddingMenuItem: isAddingMenuItem,
    setIsAddingMenuItem: setIsAddingMenuItem,
    onPressAddItem: onPressAddItem,
    menuItems: menuItems,
    nameError: nameError,
    setNameError: setNameError,
    priceError: priceError,
    setPriceError: setPriceError,
  };

  return <MenuView {...generatedProps} />;
};

export default Menu;
