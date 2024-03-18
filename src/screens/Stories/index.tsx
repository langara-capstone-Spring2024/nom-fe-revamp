import React from "react";
import { View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NavigationService from "../../navigation/NavigationService";
import styles from "./styles";
import Button from "../../components/base/Button";

interface ButtonItem {
  name: string;
  onPress: () => void;
}
const Stories = () => {
  const collections: ButtonItem[] = [
    /*_PLOP_INJECT_COMPONENT_SCREEN */
    { name: "Ad", onPress: () => NavigationService.navigate("AdCollection") },
    {
      name: "LoadingAnimation",
      onPress: () => NavigationService.navigate("LoadingAnimationCollection"),
    },
    {
      name: "Segment",
      onPress: () => NavigationService.navigate("SegmentCollection"),
    },

    {
      name: "RestaurantDetail",
      onPress: () => NavigationService.navigate("RestaurantDetailCollection"),
    },
    {
      name: "OrderCard",
      onPress: () => NavigationService.navigate("OrderCardCollection"),
    },
    {
      name: "AdTemplateThree",
      onPress: () => NavigationService.navigate("AdTemplateThreeCollection"),
    },
    {
      name: "AdTemplateOne",
      onPress: () => NavigationService.navigate("AdTemplateOneCollection"),
    },
    {
      name: "SVG",
      onPress: () => NavigationService.navigate("SVGCollection"),
    },
    {
      name: "AdTemplateTwo",
      onPress: () => NavigationService.navigate("AdTemplateTwoCollection"),
    },
    {
      name: "MenuList",
      onPress: () => NavigationService.navigate("MenuListCollection"),
    },
    {
      name: "MenuImagePicker",
      onPress: () => NavigationService.navigate("MenuImagePickerCollection"),
    },
    {
      name: "DishCard",
      onPress: () => NavigationService.navigate("DishCardCollection"),
    },
    {
      name: "RestaurantCard",
      onPress: () => NavigationService.navigate("RestaurantCardCollection"),
    },
    {
      name: "CouponCarousel",
      onPress: () => NavigationService.navigate("CouponCarouselCollection"),
    },
    {
      name: "Coupon",
      onPress: () => NavigationService.navigate("CouponCollection"),
    },
    {
      name: "RestaurantDescription",
      onPress: () =>
        NavigationService.navigate("RestaurantDescriptionCollection"),
    },
    {
      name: "Chips",
      onPress: () => NavigationService.navigate("ChipsCollection"),
    },
    {
      name: "WheelPicker",
      onPress: () => NavigationService.navigate("WheelPickerCollection"),
    },
    {
      name: "ItemList",
      onPress: () => NavigationService.navigate("ItemListCollection"),
    },
    {
      name: "AgendaItem",
      onPress: () => NavigationService.navigate("AgendaItemCollection"),
    },
    {
      name: "ExpandableCalendarComponent",
      onPress: () =>
        NavigationService.navigate("ExpandableCalendarComponentCollection"),
    },
    {
      name: "TextArea",
      onPress: () => NavigationService.navigate("TextAreaCollection"),
    },
    {
      name: "ReviewCard",
      onPress: () => NavigationService.navigate("ReviewCardCollection"),
    },
    {
      name: "RatingBars",
      onPress: () => NavigationService.navigate("RatingBarsCollection"),
    },
    { name: "Map", onPress: () => NavigationService.navigate("MapCollection") },
    {
      name: "List",
      onPress: () => NavigationService.navigate("ListCollection"),
    },
    {
      name: "Accordion",
      onPress: () => NavigationService.navigate("AccordionCollection"),
    },
    {
      name: "MenuCard",
      onPress: () => NavigationService.navigate("MenuCardCollection"),
    },
    {
      name: "DatePicker",
      onPress: () => NavigationService.navigate("DatePickerCollection"),
    },
    {
      name: "AdImagePicker",
      onPress: () => NavigationService.navigate("AdImagePickerCollection"),
    },
    {
      name: "CircularNumber",
      onPress: () => NavigationService.navigate("CircularNumberCollection"),
    },
    {
      name: "ChangePassword",
      onPress: () => NavigationService.navigate("ChangePasswordCollection"),
    },
    {
      name: "Scanner",
      onPress: () => NavigationService.navigate("ScannerCollection"),
    },
    {
      name: "Stepper",
      onPress: () => NavigationService.navigate("StepperCollection"),
    },
    {
      name: "AutoComplete",
      onPress: () => NavigationService.navigate("AutoCompleteCollection"),
    },
    {
      name: "UserAvatar",
      onPress: () => NavigationService.navigate("UserAvatarCollection"),
    },
    {
      name: "SingleImagePicker",
      onPress: () => NavigationService.navigate("SingleImagePickerCollection"),
    },
    {
      name: "MultipleImagePicker",
      onPress: () =>
        NavigationService.navigate("MultipleImagePickerCollection"),
    },
    {
      name: "Stripe",
      onPress: () => NavigationService.navigate("StripeCollection"),
    },
    {
      name: "Dropdown",
      onPress: () => NavigationService.navigate("DropdownCollection"),
    },
    {
      name: "DateTimeSelector",
      onPress: () => NavigationService.navigate("DateTimeSelectorCollection"),
    },
    {
      name: "Checkbox",
      onPress: () => NavigationService.navigate("CheckboxCollection"),
    },
    {
      name: "Typography",
      onPress: () => NavigationService.navigate("TypographyCollection"),
    },
    {
      name: "Button",
      onPress: () => NavigationService.navigate("ButtonCollection"),
    },
    {
      name: "FormikTextInputField",
      onPress: () =>
        NavigationService.navigate("FormikTextInputFieldCollection"),
    },
    {
      name: "TextInputField",
      onPress: () => NavigationService.navigate("TextInputFieldCollection"),
    },
  ];

  const renderItem = ({ item }: { item: ButtonItem }) => (
    <Button
      variant="primary"
      buttonSize="lg"
      text={item.name}
      onPress={item.onPress}
      takeFullWidth
      iconPosition="right"
      icon={<AntDesign name="arrowright" size={24} color="white" />}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Stories;
