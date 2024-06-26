import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type Collections = {
  // PLOP_COMPONENT_TYPE
  ArticlesCollection: undefined;
  SegmentedControlCollection: undefined;
  MerchantDashboardCollection: undefined;
  AdCollection: undefined;
  LoadingAnimationCollection: undefined;
  ItemsCollection: undefined;
  SegmentCollection: undefined;
  RestaurantDetailCollection: undefined;
  OrderCardCollection: undefined;
  AdTemplateThreeCollection: undefined;
  AdTemplateOneCollection: undefined;
  SVGCollection: undefined;
  AdTemplateTwoCollection: undefined;
  MenuListCollection: undefined;
  DishCardCollection: undefined;
  RestaurantCardCollection: undefined;
  CouponCarouselCollection: undefined;
  CouponCollection: undefined;
  RestaurantDescriptionCollection: undefined;
  MenuImagePickerCollection: undefined;
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
 CustomerRegistration: undefined;
 HamburgerScreen: undefined;
  RegistrationRole: undefined;
  MerchantRegistration: undefined;
  ConsumerDiscount: { consumerDiscountId: string };
  OrderDetails: { merchantId: string; discountId: string; consumerId: string };
  RestaurantProfile: { merchantId: string };
  PromoDetails: undefined;
  Items: undefined;
  MerchantAccount: undefined;
  ConsumerAccount: undefined;
  MerchantHome: { merchantId: string };
  Orders: undefined;
  ConsumerHome: undefined;
  Menu: undefined;
  Promo: undefined;
  Scanner: undefined;
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
