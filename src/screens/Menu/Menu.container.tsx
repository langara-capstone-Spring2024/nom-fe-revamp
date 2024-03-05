import React from "react";
import MenuView from "./Menu.view";
import { GetMenu } from "./../../services/react-query/queries/menu";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import { Image } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { S3Params } from "../../types/S3Params";
import { S3 } from "aws-sdk";
import "react-native-get-random-values";

const Menu = () => {

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

  const handleNameChange = (text: string) => {
    if (!text.trim()) {
      setNameError("Please input the item name");
    } else {
      setNameError("");
    }
    onNameChange(text);
  };

  const handlePriceChange = (text: string) => {
    if (!text.trim()) {
      setPriceError("Please indicate the price");
    } else if (!/^\d+(\.\d{1,3})?$/.test(text)) {
      setPriceError("Invalid price format");
    } else {
      setPriceError("");
    }
    onPriceChange(text);
  };

  const s3 = new S3({
    accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.EXPO_PUBLIC_AWS_REGION,
  });

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

      const result = await s3.upload(params).promise();
      console.log(result.Location)
      // add to mongodb
    }
  };


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
    handleNameChange: handleNameChange,
    handlePriceChange: handlePriceChange,
  };

  return <MenuView {...generatedProps} />;
};

export default Menu;
