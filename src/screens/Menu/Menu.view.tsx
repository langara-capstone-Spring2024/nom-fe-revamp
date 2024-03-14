import React, { useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
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
import MenuImagePicker from "../../components/base/MenuImagePicker";
import useKeyboard from "../../utils/hooks/useKeyboard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MenuView = (props: MenuGeneratedProps) => {
  const {
    localImage,
    handleImageChange,
    isAddingMenuItem,
    setIsAddingMenuItem,
    handlePriceChange,
    handleNameChange,
    name,
    onNameChange,
    price,
    onPriceChange,
    description,
    onDescriptionChange,
    onPressAddItem,
    menuItems,
    nameError,
    setNameError,
    priceError,
    setPriceError,
    handleDescriptionChange,
    remainingChars
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const isDisabled = !name || !price || !!nameError || !!priceError;
  const isKeyboardOpen = useKeyboard();

  return isAddingMenuItem ? (
    <View style={styles.addItemContainer}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.keyboard}
        extraScrollHeight={90}
      >
        <View style={styles.imagePicker}>
          <MenuImagePicker image={localImage} setImage={handleImageChange} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.nameContainer}>
            <TextInputField
              label="Name"
              value={name}
              setValue={handleNameChange}
              error={nameError}
            />
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceTextfieldContainer}>
              <TextInputField
                label="Price"
                value={price}
                setValue={handlePriceChange}
                error={priceError}
              />
            </View>
            <View
              style={
                priceError ? styles.errorPriceCurrency : styles.priceCurrency
              }
            >
              <Typography variant="body" color="primary">
                CA$
              </Typography>
            </View>
          </View>
          <View style={styles.textareaContainer}>
            <TextArea
              label="Description (optional)"
              value={description}
              setValue={handleDescriptionChange}
              maxLength={100}
            />
          </View>
          <Typography variant="bodyXs" alignment="right" color="subtle">
            {100 - remainingChars}/100
          </Typography>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text="Add Item"
          takeFullWidth
          onPress={onPressAddItem}
          isDisabled={isDisabled}
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
      <ScrollView>
        <View style={styles.menuCardContainer}>
          {menuItems &&
            menuItems.length > 0 &&
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
      </ScrollView>
    </View>
  );
};

export default MenuView;
