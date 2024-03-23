import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MenuList from "../../components/base/MenuList";

const MenuListCollection = () => {
  const [selectedMenuIds, setSelectedMenuIds] = useState<string[]>([]);

  const handleSelectMenu = (menuId: string) => {
    const isSelected = selectedMenuIds?.includes(menuId);

    if (isSelected) {
      setSelectedMenuIds((menuIds) => menuIds.filter((id) => id !== menuId));
    } else {
      setSelectedMenuIds((menuIds) => [...menuIds, menuId]);
    }
  };

  console.log("selectedMenuIds: ", selectedMenuIds);
  return (
    <View style={styles.container}>
      <MenuList
        menuId="1"
        menuImage="https://picsum.photos/360?random=1"
        menuName="Chicken Wings"
        menuPrice={17.99}
        handleSelect={() => handleSelectMenu("1")}
        selected={selectedMenuIds.includes("1")}
        hideRadioButton={false}
      />
      <MenuList
        menuId="2"
        menuImage=""
        menuName="Chicken Wings"
        menuPrice={17.99}
        handleSelect={() => handleSelectMenu("2")}
        selected={selectedMenuIds.includes("2")}
        hideRadioButton={false}
      />
    </View>
  );
};

export default MenuListCollection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
