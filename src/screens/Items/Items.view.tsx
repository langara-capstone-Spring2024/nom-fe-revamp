import { View, Text } from "react-native";
import createStyles from "./Items.style";
import { ItemsGeneratedProps } from "./Items.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import MenuList from "../../components/base/MenuList";
import Button from "../../components/base/Button";

const Items = (props: ItemsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { allMenu, handleSelectMenu, selectedMenuIds } = props;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemList}>
        {allMenu.map((menu) => (
          <MenuList
            menuId={menu._id}
            menuImage={""}
            menuName={menu.name}
            menuPrice={menu.originalPrice}
            handleSelect={() => handleSelectMenu(menu._id)}
            selected={selectedMenuIds.includes(menu._id)}
          />
        ))}
      </View>
      <View style={styles.itemButton}>
        <Button text="Save" variant="primary" buttonSize="md" takeFullWidth />
      </View>
    </View>
  );
};

export default Items;
