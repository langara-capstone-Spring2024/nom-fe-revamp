import { BottomNavigationProps } from "./BottomNavigation.props";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../../navigation/NavigationService";
import SampleScreen from "../../../screens/SampleScreen";
import React, { useEffect, useState } from "react";
import Stories from "../../../screens/Stories";
import { useStore } from "../../../store";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import Scanner from "../../../screens/Scanner";
import ConsumerHome from "../../../screens/ConsumerHome";
import Orders from "../../../screens/Orders";
import MerchantHome from "../../../screens/MerchantHome";
import ConsumerAccount from "../../../screens/ConsumerAccount";
import MerchantAccount from "../../../screens/MerchantAccount";
import {
  AccountTab,
  HomeFilledTab,
  HomeOutlinedTab,
  OrdersTab,
  ScannerTab,
} from "../../base/SVG";
import { View } from "react-native";

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
    <>
      {role && (
        <Tab.Navigator
          initialRouteName="SampleScreen"
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#939393",
          }}
        >
          {role && role === "consumer" ? (
            <>
              <Tab.Screen
                name="ConsumerHome"
                component={ConsumerHome}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={
                        focused && {
                          backgroundColor: "#FFE1E4",
                          paddingVertical: 4,
                          paddingHorizontal: 12,
                          borderRadius: 16,
                        }
                      }
                    >
                      <HomeFilledTab fill={focused ? "#E51E35" : "black"} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                  tabBarLabel: "Orders",
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={
                        focused && {
                          backgroundColor: "#FFE1E4",
                          paddingVertical: 4,
                          paddingHorizontal: 12,
                          borderRadius: 16,
                        }
                      }
                    >
                      <OrdersTab fill={focused ? "#E51E35" : "black"} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="ConsumerAccount"
                component={ConsumerAccount}
                options={{
                  tabBarLabel: "Acount",
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={
                        focused && {
                          backgroundColor: "#FFE1E4",
                          paddingVertical: 4,
                          paddingHorizontal: 12,
                          borderRadius: 16,
                        }
                      }
                    >
                      <AccountTab fill={focused ? "#E51E35" : "black"} />
                    </View>
                  ),
                }}
              />
            </>
          ) : role === "merchant" ? (
            <>
              <Tab.Screen
                name="MerchantHome"
                component={MerchantHome}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size, focused }) => (
                    <HomeOutlinedTab fill={focused ? "black" : "#939393"} />
                  ),
                }}
              />
              <Tab.Screen
                name="Scanner"
                component={Scanner}
                options={{
                  tabBarLabel: "QR Scanner",
                  tabBarIcon: ({ color, size }) => <ScannerTab />,
                  tabBarIconStyle: {
                    top: -24,
                  },
                  tabBarStyle: { display: "none" },
                }}
              />
              <Tab.Screen
                name="MerchantAccount"
                component={MerchantAccount}
                options={{
                  tabBarLabel: "Acount",
                  tabBarIcon: ({ color, size, focused }) => (
                    <AccountTab fill={focused ? "black" : "#939393"} />
                  ),
                }}
              />
            </>
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
      )}
    </>
  );
};

export default BottomNavigation;
