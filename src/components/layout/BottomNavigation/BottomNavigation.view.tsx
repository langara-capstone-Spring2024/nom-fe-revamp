import { BottomNavigationProps } from "./BottomNavigation.props";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../../../navigation/NavigationService";
import SampleScreen from "../../../screens/SampleScreen";
import React from "react";
import Stories from "../../../screens/Stories";
const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigation = (props: BottomNavigationProps) => {
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
      }}>
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
