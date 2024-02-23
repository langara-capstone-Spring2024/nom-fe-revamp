import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type Collections = {
  // PLOP_COMPONENT_TYPE
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
  Scanner: undefined;
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
