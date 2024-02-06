import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type Collections = {
  // PLOP_COMPONENT_TYPE
 StripeCollection: undefined;
 DropdownCollection: undefined;
 CheckboxCollection: undefined;
  TimePickerCollection: undefined;
  TypographyCollection: undefined;
  UserAvatarCollection: undefined;
  SingleImagePickerCollection: undefined;
  MultipleImagePickerCollection: undefined;
  ButtonCollection: undefined;
  FormikTextInputFieldCollection: undefined;
  LoadingAnimationCollection: undefined;
  TextInputFieldCollection: undefined;
};

type ProductDetail = {
  ProductDetail: {
    product: {
      id: number;
      title: string;
      price: number;
      description: string;
      image: string;
    };
  };
};

// insert a value on the type to pass a param
export type RootStackParamList = {
  // PLOP_SCREEN_TYPE
 ChangePassword: undefined;
  Counter: undefined;
  Home: undefined;
  Stories: undefined;
  ProductList: undefined;
  BottomNavigation: undefined;
  Login: undefined;
} & Collections &
  ProductDetail;

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

function navigate(
  name: keyof RootStackParamList,
  params?: RootStackParamList[keyof RootStackParamList]
) {
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
