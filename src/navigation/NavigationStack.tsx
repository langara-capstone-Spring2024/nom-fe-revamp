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

const Stack = createStackNavigator();
const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

const PrivateNavigator = () => {
  const components = [
    // PLOP_INJECT_NAVIGATOR_SCREEN
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
    { func: ChangePasswordCollection, custom: false },
  ];

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
                  onPress={() => navigation.goBack()}
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
