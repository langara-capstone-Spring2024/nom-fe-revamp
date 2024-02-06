import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "../store";
import Login from "../screens/Login";

import { navigationRef } from "./NavigationService";
import SampleScreen from "../screens/SampleScreen";
import BottomNavigation from "../components/layout/BottomNavigation";

import Button from "../components/base/Button";

const Stack = createStackNavigator();
const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

const PrivateNavigator = () => {
  const components = [{ func: SampleScreen, custom: false }];
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
