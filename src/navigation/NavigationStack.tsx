import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "../store";
import Login from "../screens/Login";
import { AntDesign } from "@expo/vector-icons";

import { navigationRef } from "./NavigationService";
import SampleScreen from "../screens/SampleScreen";
import BottomNavigation from "../components/layout/BottomNavigation";
import ChangePassword from "../screens/ChangePassword";

// PLOP_INJECT_COLLECTION_IMPORT
import ArticlesCollection from "../collections/base/Articles";
import SegmentedControlCollection from "../collections/base/SegmentedControl";
import MerchantDashboardCollection from "../collections/base/MerchantDashboard";
import AdCollection from "../collections/base/Ad";
import LoadingAnimationCollection from "../collections/base/LoadingAnimation";
import SegmentCollection from "../collections/base/Segment";
import RestaurantDetailCollection from "../collections/base/RestaurantDetail";
import OrderCardCollection from "../collections/base/OrderCard";
import AdTemplateThreeCollection from "../collections/base/AdTemplateThree";
import AdTemplateOneCollection from "../collections/base/AdTemplateOne";
import AdTemplateTwoCollection from "../collections/base/AdTemplateTwo";
import MenuListCollection from "../collections/base/MenuList";
import DishCardCollection from "../collections/base/DishCard";
import RestaurantCardCollection from "../collections/base/RestaurantCard";
import CouponCarouselCollection from "../collections/base/CouponCarousel";
import CouponCollection from "../collections/base/Coupon";
import RestaurantDescriptionCollection from "../collections/base/RestaurantDescription";
import MenuImagePickerCollection from "../collections/base/MenuImagePicker";
import ChipsCollection from "../collections/base/Chips";
import WheelPickerCollection from "../collections/base/WheelPicker";
import ItemListCollection from "../collections/base/ItemList";
import AgendaItemCollection from "../collections/base/AgendaItem";
import ExpandableCalendarComponentCollection from "../collections/base/ExpandableCalendarComponent";
import TextAreaCollection from "../collections/base/TextArea";
import ReviewCardCollection from "../collections/base/ReviewCard";
import RatingBarsCollection from "../collections/base/RatingBars";
import MapCollection from "../collections/base/Map";
import ListCollection from "../collections/base/List";
import AccordionCollection from "../collections/base/Accordion";
import MenuCardCollection from "../collections/base/MenuCard";
import DatePickerCollection from "../collections/base/DatePicker";
import AdImagePickerCollection from "../collections/base/AdImagePicker";
import CircularNumberCollection from "../collections/base/CircularNumber";
import ChangePasswordCollection from "../collections/base/ChangePassword";
import ScannerCollection from "../collections/module/Scanner";
import StepperCollection from "../collections/base/Stepper";
import AutoCompleteCollection from "../collections/base/AutoComplete";
import UserAvatarCollection from "../collections/base/UserAvatar";
import SingleImagePickerCollection from "../collections/base/SingleImagePicker";
import MultipleImagePickerCollection from "../collections/base/MultipleImagePicker";
import StripeCollection from "../collections/module/Stripe";
import DateTimeSelectorCollection from "../collections/base/DateTimeSelector";
import CheckboxCollection from "../collections/base/Checkbox";
import DropdownCollection from "../collections/base/Dropdown";
import ButtonCollection from "../collections/base/Button";
import TextInputFieldCollection from "../collections/base/TextInputField";
import FormikTextInputFieldCollection from "../collections/base/FormikTextInputField";
import TypographyCollection from "../collections/base/Typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import AdMaker from "../screens/AdMaker";
import Promo from "../screens/Promo";
import Menu from "./../screens/Menu";
import SVGCollection from "../collections/base/SVG";
import PromoDetails from "../screens/PromoDetails";
import Items from "../screens/Items";
import RestaurantProfile from "../screens/RestaurantProfile";
import OrderDetails from "../screens/OrderDetails";
import ConsumerDiscount from "../screens/ConsumerDiscount";
import MerchantRegistration from "../screens/MerchantRegistration";
import CustomerRegistration from "../screens/CustomerRegistration";
import MerchantHome from "../screens/MerchantHome";
import RegistrationRole from "../screens/RegistrationRole";

const Stack = createStackNavigator();
const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

const PrivateNavigator = () => {
  const components = [
    // PLOP_INJECT_NAVIGATOR_SCREEN
    { func: ArticlesCollection, custom: false },
    { func: SegmentedControlCollection, custom: false },
    { func: MerchantDashboardCollection, custom: false },
    { func: AdCollection, custom: false },
    { func: LoadingAnimationCollection, custom: false },
    { func: SegmentCollection, custom: false },
    { func: RestaurantDetailCollection, custom: false },
    { func: OrderCardCollection, custom: false },
    { func: AdTemplateThreeCollection, custom: false },
    { func: AdTemplateOneCollection, custom: false },
    { func: SVGCollection, customName: "", custom: false },
    { func: AdTemplateTwoCollection, custom: false },
    { func: MenuListCollection, custom: false },
    { func: DishCardCollection, custom: false },
    { func: RestaurantCardCollection, custom: false },
    { func: CouponCarouselCollection, custom: false },
    { func: CouponCollection, custom: false },
    { func: RestaurantDescriptionCollection, custom: false },
    { func: MenuImagePickerCollection, custom: false },
    { func: ChipsCollection, custom: false },
    { func: WheelPickerCollection, custom: false },
    { func: ItemListCollection, custom: false },
    { func: AgendaItemCollection, custom: false },
    { func: ExpandableCalendarComponentCollection, custom: false },
    { func: TextAreaCollection, custom: false },
    { func: ReviewCardCollection, custom: false },
    { func: RatingBarsCollection, custom: false },
    { func: MapCollection, custom: false },
    { func: ListCollection, custom: false },
    { func: AccordionCollection, custom: false },
    { func: MenuCardCollection, custom: false },
    { func: DatePickerCollection, custom: false },
    { func: AdImagePickerCollection, custom: false },
    { func: CircularNumberCollection, custom: false },
    { func: ScannerCollection, customName: "", custom: false },
    { func: StepperCollection, customName: "", custom: false },
    { func: AutoCompleteCollection, customName: "", custom: false },
    { func: UserAvatarCollection, customName: "", custom: false },
    { func: SingleImagePickerCollection, customName: "", custom: false },
    { func: MultipleImagePickerCollection, customName: "", custom: false },
    { func: StripeCollection, customName: "", custom: false },
    { func: DateTimeSelectorCollection, customName: "", custom: false },
    { func: CheckboxCollection, customName: "", custom: false },
    { func: DropdownCollection, customName: "", custom: false },
    { func: SampleScreen, customName: "", custom: false },
    { func: ButtonCollection, customName: "", custom: false },
    { func: FormikTextInputFieldCollection, customName: "", custom: false },
    { func: TextInputFieldCollection, customName: "", custom: false },
    { func: TypographyCollection, customName: "", custom: false },
    { func: ChangePassword, customName: "", custom: false },
    { func: AdMaker, customName: "Banner Ads", custom: false },
    { func: Promo, customName: "Promo", custom: false },
    { func: Menu, customName: "Menu", custom: false },
    { func: ChangePasswordCollection, custom: false },
    { func: PromoDetails, customName: "Promo Details", custom: false },
    { func: Items, customName: "Items", custom: false },
    {
      func: RestaurantProfile,
      customName: "Restaurant Profile",
      custom: false,
    },
    { func: OrderDetails, customName: "Order Details", custom: false },
    { func: ConsumerDiscount, customName: "Consumer Discount", custom: false },
    {
      func: MerchantRegistration,
      customName: "Merchant Registration",
      custom: false,
    },
    {
      func: CustomerRegistration,
      customName: "Customer Registration",
      custom: false,
    },
  ];
  const {
    isAdScreen,
    prev,
    page,
    setAdScreen,
    isMenuScreen,
    setMenuScreen,
    isAddingMenuItem,
    setIsAddingMenuItem,
  } = useStore((state) => ({
    isAdScreen: state.isAdScreen,
    setAdScreen: state.setAdScreen,
    prev: state.previous,
    next: state.next,
    page: state.page,
    isMenuScreen: state.isMenuScreen,
    setMenuScreen: state.setMenuScreen,
    isAddingMenuItem: state.isAddingMenuItem,
    setIsAddingMenuItem: state.setIsAddingMenuItem,
  }));

  return (
    <PrivateStack.Navigator>
      <Stack.Screen
        name="Bottom"
        component={BottomNavigation}
        options={{ headerShown: false, headerTitle: "" }}
      />
      {components.map((component, index) => {
        const screenName = !!component.customName
          ? component.customName
          : component.func.name;
        return (
          <Stack.Screen
            key={index}
            name={component.func.name}
            component={component.func}
            options={({ navigation }) => ({
              headerTitle: screenName,
              headerShown: true,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    if (isAdScreen && page !== 1) {
                      prev();
                    } else if (isMenuScreen && isAddingMenuItem) {
                      setIsAddingMenuItem(false);
                    } else {
                      setAdScreen(false);
                      setMenuScreen(false);
                      navigation.goBack();
                    }
                  }}
                  style={{ paddingLeft: 16, margin: 8 }}
                >
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
        );
      })}
    </PrivateStack.Navigator>
  );
};

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationRole"
        component={RegistrationRole}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MerchantRegistration"
        component={MerchantRegistration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomerRegistration"
        component={CustomerRegistration}
        options={{ headerShown: false }}
      />
    </PublicStack.Navigator>
  );
};

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));

  React.useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen
            name="PrivateStack"
            component={PrivateNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="PublicStack"
            component={PublicNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
