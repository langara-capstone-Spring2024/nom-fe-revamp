import { View, Text } from "react-native";
import createStyles from "./Items.style";
import { ItemsGeneratedProps } from "./Items.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import MenuList from "../../components/base/MenuList";
import Button from "../../components/base/Button";
import Typography from "../../components/base/Typography";

const Items = (props: ItemsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { allMenu, handleSelectMenu, selectedMenuIds, handleSave } = props;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemList}>
        {allMenu ? (
          allMenu.map((menu) => (
            <MenuList
              key={menu._id}
              menuId={menu._id}
              menuImage={""}
              menuName={menu.name}
              menuPrice={menu.originalPrice}
              handleSelect={() => handleSelectMenu(menu)}
              selected={selectedMenuIds.includes(menu)}
            />
          ))
        ) : (
          <Typography>Nothing</Typography>
        )}
      </View>
      <View style={styles.itemButton}>
        <Button
          text="Save"
          variant="primary"
          buttonSize="md"
          takeFullWidth
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

export default Items;
