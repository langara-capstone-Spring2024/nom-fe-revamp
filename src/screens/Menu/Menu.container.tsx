import React from "react";
import MenuView from "./Menu.view";
import { GetMenu } from "./../../services/react-query/queries/menu";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import { Image } from "../../types";

const Menu = () => {
  const { setMenuScreen, isAddingMenuItem, setIsAddingMenuItem } = useStore(
    (state) => ({
      setMenuScreen: state.setMenuScreen,
      isAddingMenuItem: state.isAddingMenuItem,
      setIsAddingMenuItem: state.setIsAddingMenuItem,
    })
  );
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);
  const handleImageChange = (image?: Image | undefined) => {
    setLocalImage(image);
  };
  
  const [name, onNameChange] = useState<string>("");
  const [price, onPriceChange] = useState<string>("");
  const [description, onDescriptionChange] = useState<string>("");

  useEffect(() => {
    setMenuScreen(true);
  }, []);

  useState()
  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }


  const onPressAddItem = () => {
    
  }

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
  };

  return <MenuView {...generatedProps} />;
};

export default Menu;
