import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type Collections = {
  // PLOP_COMPONENT_TYPE
  DishCardCollection: undefined;
  RestaurantCardCollection: undefined;
  CouponCarouselCollection: undefined;
  CouponCollection: undefined;
  RestaurantDescriptionCollection: undefined;
  ChipsCollection: undefined;
  WheelPickerCollection: undefined;
  ItemListCollection: undefined;
  AgendaItemCollection: undefined;
  ExpandableCalendarComponentCollection: undefined;
  TextAreaCollection: undefined;
  ReviewCardCollection: undefined;
  RatingBarsCollection: undefined;
  MapCollection: undefined;
  ListCollection: undefined;
  AccordionCollection: undefined;
  MenuCardCollection: undefined;
  DatePickerCollection: undefined;
  AdImagePickerCollection: undefined;
  CircularNumberCollection: undefined;
  ChangePasswordCollection: undefined;
  ScannerCollection: undefined;
  StepperCollection: undefined;
  AutoCompleteCollection: undefined;
  UserAvatarCollection: undefined;
  SingleImagePickerCollection: undefined;
  MultipleImagePickerCollection: undefined;
  StripeCollection: undefined;
  DateTimeSelectorCollection: undefined;
  CheckboxCollection: undefined;
  DropdownCollection: undefined;
  TestModuleCollection: undefined;
  BaseCollection: undefined;
  TestBaseCollection: undefined;
  ButtonCollection: undefined;
  FormikTextInputFieldCollection: undefined;
  TextInputFieldCollection: undefined;
  TypographyCollection: undefined;
};

// insert a value on the type to pass a param
export type RootStackParamList = {
  // PLOP_SCREEN_TYPE
  Menu: undefined;
  Promo: undefined;
  Scanner: undefined;
  Activity: undefined;
  Account: undefined;
  Home: undefined;
  AdMaker: undefined;
  TestScreen: undefined;
  Stories: undefined;
  Login: undefined;
  SampleScreen: undefined;
} & Collections;

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

function navigate(
  name: keyof RootStackParamList,
  params?: RootStackParamList[keyof RootStackParamList]
) {
  //@ts-ignore
  navigationRef.current?.navigate(name, params as never);
}

function goBack() {
  navigationRef.current?.goBack();
}

const NavigationService = {
  navigate,
  goBack,
};

export default NavigationService;
