import React from "react";
import MenuView from "./Menu.view";
import { GetMenu } from "./../../services/react-query/queries/menu";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import { Image, Menus } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { S3Params } from "../../types/S3Params";
import { S3 } from "aws-sdk";
import "react-native-get-random-values";
import { MenuService } from "../../services/MenuService";
import { addMenuItem } from "./../../services/react-query/queries/menu";
import LoadingAnimation from "../../components/base/LoadingAnimation";


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
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [updatedMenu, setUpdatedMenu] = useState<Menus[]>([]);
  const [remainingChars, setRemainingChars] = useState(100);

  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }

  useEffect(() => {
    setMenuScreen(true);
    if(menuItems !== undefined)
    setIsLoading(false);
  }, [menuItems]);

  const handleNameChange = (text: string) => {
    if (!text.trim()) {
      setNameError("Please input the item name");
    } else {
      setNameError("");
    }
    setName(text);
  };

  const handlePriceChange = (text: string) => {
    if (!text.trim()) {
      setPriceError("Please indicate the price");
    } else if (!/^\d+(\.\d{1,3})?$/.test(text)) {
      setPriceError("Invalid price format");
    } else {
      setPriceError("");
    }
    setPrice(text);
  };

  const s3 = new S3({
    accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.EXPO_PUBLIC_AWS_REGION,
  });

  const { mutate: addMenu, data, isPending } = addMenuItem();

  const onPressAddItem = async () => {
    try {
      setIsLoading(true);
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

        // Upload the image to S3
        const result = await s3.upload(params).promise();
        console.log(result.Location);

        // Add menu item to MongoDB with image URL
        const menuItemData = {
          imageUrl: result.Location,
          name,
          originalPrice: price,
          description: description || "",
        };

        addMenu({ formData: menuItemData });
      } else {
        const menuItemData = {
          imageUrl: undefined,
          name,
          originalPrice: price,
          description: description || "",
        };

        addMenu({ formData: menuItemData });
      }

      setName("");
      setPrice("");
      setDescription("");
      setLocalImage(undefined);
      setIsAddingMenuItem(false);
    } catch (error) {
      console.error("Error adding menu item:", error);
    } finally {
      // This block runs regardless of the previous blocks' outcomes
      setIsLoading(false); // Ensure loading is stopped after operation is complete or if an error occurs
    }
  };

  const handleDescriptionChange = (text: string) => {
    if (text.length <= 100) {
      setDescription(text);
      setRemainingChars(100 - text.length);
    }
  };

  const generatedProps = {
    localImage: localImage,
    handleImageChange: handleImageChange,
    name: name,
    onNameChange: setName,
    price: price,
    onPriceChange: setPrice,
    description: description,
    onDescriptionChange: setDescription,
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
    handleDescriptionChange: handleDescriptionChange,
    remainingChars: remainingChars,
  };

  return isLoading ? (
    <LoadingAnimation /> // Show this when loading
  ) : (
    <MenuView {...generatedProps} /> // Otherwise, show the main content
  );
};

export default Menu;
