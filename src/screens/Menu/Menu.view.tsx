import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import createStyles from "./Menu.style";
import MenuCard from "../../components/base/MenuCard";
import ItemList from "../../components/base/ItemList";
import { GetMenu } from "./../../services/react-query/queries/menu";
import { Menus } from "../../types/Menus";

const Menu = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // Use the GetMenu hook to fetch menu items
  const { data: menuItems, error } = GetMenu();

  if (error) {
    console.error("Error fetching menu items:", error);
  }

  return (
    <View style={styles.container}>
      <ItemList title="Add Items" subtitle="Add or edit items" />
      <View style={styles.menuCardContainer}>
        {/* Check if menuItems is not undefined before mapping */}
        {menuItems &&
          menuItems.map((item: Menus) => (
            <MenuCard
              key={item._id}
              itemName={item.name}
              originalPrice={item.originalPrice}
              itemImage={item.imageUrl}
              itemDescription={item.description}
            />
          ))}
      </View>
    </View>
  );
};

export default Menu;
