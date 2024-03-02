import React, { useMemo, useEffect, useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import createStyles from "./Menu.style";
import MenuCard from "../../components/base/MenuCard";
import Menu from "./../../types/Menu"
import { apiClient } from "../../services/client";

const Menu = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await apiClient.get("api/menu");
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.data)) {
          setMenuItems(responseData.data);
        } else {
          console.error("Invalid menu items data:", responseData);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <MenuCard
          key={item._id}
          itemName={item.name}
          originalPrice={item.originalPrice}
          itemImage={item.imageUrl}
          itemDescription={item.description}
        />
      ))}
    </View>
  );
};

export default Menu;
import React, { useMemo, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import createStyles from "./Menu.style";
import MenuCard from "../../components/base/MenuCard";
import { MenuItem } from "../../types/Menu";
import { apiClient } from "../../services/client";
import ItemList from "../../components/base/ItemList";
import axios from "axios";

const Menu = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await apiClient.get("api/menu");
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.data)) {
          setMenuItems(responseData.data);
        } else {
          console.error("Invalid menu items data:", responseData);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <View style={styles.container}>
      <ItemList title="Add Items" subtitle="Add or edit items" />
      <View style={styles.menuCardContainer}>
        {menuItems.map((item) => (
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
