import React from 'react';
import MenuView from './Menu.view';
import { GetMenu } from "./../../services/react-query/queries/menu";

const Menu = () => {
  const generatedProps = {
    // generated props here
  };

  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }
  
  return <MenuView menuItems={menuItems} {...generatedProps} />;
};

export default Menu;
