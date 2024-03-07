import { BottomNavigationProps } from "./BottomNavigation.props";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../../../navigation/NavigationService";
import SampleScreen from "../../../screens/SampleScreen";
import React, { useEffect, useState } from "react";
import Stories from "../../../screens/Stories";
import Home from "../../../screens/Home";
import Account from "../../../screens/Account";
import { useStore } from "../../../store";
import { jwtDecode } from "jwt-decode";
import Activity from "../../../screens/Activity";
import Scanner from "../../../screens/Scanner";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigation = (props: BottomNavigationProps) => {
  const { accessToken } = useStore((state) => ({
    accessToken: state.accessToken,
  }));

  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (accessToken) {
      const decodedToken: { UserInfo: { role: string } } =
        jwtDecode(accessToken);

      const role = decodedToken.UserInfo.role;

      if (role) {
        setRole(role);
      }
    }
  }, [accessToken]);

  return (
    <Tab.Navigator
      initialRouteName="SampleScreen"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#34495e",
        tabBarActiveBackgroundColor: "hotpink",
        tabBarInactiveBackgroundColor: "gray",
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Acount",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      {role && role === "consumer" ? (
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: "Activity",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
      ) : role === "merchant" ? (
        <Tab.Screen
          name="Scanner"
          component={Scanner}
          options={{
            tabBarLabel: "Scanner",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="qr-code" size={size} color={color} />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="SampleScreen"
        component={SampleScreen}
        options={{
          tabBarLabel: "Screen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stories"
        component={Stories}
        options={{
          tabBarLabel: "Stories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
