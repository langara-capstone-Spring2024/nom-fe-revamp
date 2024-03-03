import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./Menu.style";
import MenuCard from "../../components/base/MenuCard";
import ItemList from "../../components/base/ItemList";
import { Menus } from "../../types/Menus";
import { useTheme } from "react-native-paper";
import { MenuGeneratedProps } from "./Menu.props";
import TextInputField from "../..//components/base/TextInputField";
import AdImagePicker from "../../components/base/AdImagePicker";
import TextArea from "../../components/base/TextArea";
import Typography from "../../components/base/Typography";
import Button from "../../components/base/Button";

const MenuView = (props: MenuGeneratedProps) => {
  const {
    localImage,
    handleImageChange,
    isAddingMenuItem,
    setIsAddingMenuItem,
    name,
    onNameChange,
    price,
    onPriceChange,
    description,
    onDescriptionChange,
    onPressAddItem,
    menuItems,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return isAddingMenuItem ? (
    <View style={styles.container}>
      <View style={styles.imagePicker}>
        <AdImagePicker image={localImage} setImage={handleImageChange} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.nameContainer}>
          <TextInputField label="Name" value={name} setValue={onNameChange} />
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceTextfieldContainer}>
            <TextInputField
              label="Price"
              value={price}
              setValue={onPriceChange}
            />
          </View>
          <View style={styles.priceCurrency}>
            <Typography variant="body" color="primary">
              CA$
            </Typography>
          </View>
        </View>

        <TextArea
          label="Description (optional)"
          value={description}
          setValue={onDescriptionChange}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text="Add Item"
          takeFullWidth
          onPress={onPressAddItem}
        />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <ItemList
        title="Add Items"
        subtitle="Add or edit items"
        onPress={() => setIsAddingMenuItem(true)}
      />
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
