import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./Menu.style";
import MenuCard from "../../components/base/MenuCard";
import ItemList from "../../components/base/ItemList";
import { Menus } from "../../types/Menus";
import { useTheme } from "react-native-paper";

const MenuView = ({ menuItems }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <ItemList title="Add Items" subtitle="Add or edit items" />
      <View style={styles.menuCardContainer}>
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

export default MenuView;
