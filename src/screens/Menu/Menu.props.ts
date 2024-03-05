import { Menus } from "../../types/Menus";
import { Image } from "../../types/Image";
import { GestureResponderEvent } from "react-native";

export interface MenuGeneratedProps {
  localImage?: Image | undefined;
  handleImageChange: (image?: Image | undefined) => void;
  isAddingMenuItem: boolean;
  setIsAddingMenuItem: (isAddingMenuItem: boolean) => void;
  name: string;
  onNameChange: (text: string) => void;
  price: string;
  onPriceChange: (text: string) => void;
  description: string;
  onDescriptionChange: (text: string) => void;
  onPressAddItem?:
    | ((event?: GestureResponderEvent | undefined) => void)
    | undefined;
  menuItems: Menus[];
  nameError: string;
  setNameError: (text: string) => void;
  priceError: string;
  setPriceError: (text: string ) => void;
  handlePriceChange: (text: string ) => void;
  handleNameChange: (text: string ) => void;
}
