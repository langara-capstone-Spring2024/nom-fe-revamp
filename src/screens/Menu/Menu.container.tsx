import React from 'react';
import MenuView from './Menu.view';
import { GetMenu } from "./../../services/react-query/queries/menu";

const Menu = () => {
  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }
  
  const generatedProps = {
    menuItems: menuItems
  };

  return <MenuView {...generatedProps} />;
};

export default Menu;
