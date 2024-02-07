import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "../store";
import Login from "../screens/Login";

import { navigationRef } from "./NavigationService";
import SampleScreen from "../screens/SampleScreen";
import BottomNavigation from "../components/layout/BottomNavigation";
import Scanner from "../screens/Scanner";

// PLOP_INJECT_COLLECTION_IMPORT
import StripeCollection from "../collections/module/Stripe";
import DateTimeSelectorCollection from "../collections/base/DateTimeSelector";
import CheckboxCollection from "../collections/base/Checkbox";

import ButtonCollection from "../collections/base/Button";
import TextInputFieldCollection from "../collections/base/TextInputField";
import FormikTextInputFieldCollection from "../collections/base/FormikTextInputField";
import TypographyCollection from "../collections/base/Typography";

const Stack = createStackNavigator();
const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

const PrivateNavigator = () => {
  const components = [
    // PLOP_INJECT_NAVIGATOR_SCREEN
    { func: StripeCollection, custom: false },
    { func: DateTimeSelectorCollection, custom: false },
    { func: CheckboxCollection, custom: false },
    { func: SampleScreen, custom: false },
    { func: Scanner, custom: false },
    { func: ButtonCollection, custom: false },
    { func: FormikTextInputFieldCollection, custom: false },
    { func: TextInputFieldCollection, custom: false },
    { func: TypographyCollection, custom: false },
  ];

  return (
    <PrivateStack.Navigator>
      <Stack.Screen
        name="Bottom"
        component={BottomNavigation}
        options={{ headerShown: false, headerTitle: "" }}
      />
      {components.map((component, index) => {
        return (
          <Stack.Screen
            key={index}
            name={component.func.name}
            component={component.func}
            options={({ navigation }) => ({
              headerShown: true,
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
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
