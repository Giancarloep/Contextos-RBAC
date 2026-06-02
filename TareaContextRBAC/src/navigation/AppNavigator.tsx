import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";
import { useAuth } from "../context/AuthContext";

type TabsParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export type { TabsParamList };

export default function TabNavigator() {
  const { userRole } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName={userRole === "admin" ? "Settings" : "Home"}
      screenOptions={{
        tabBarActiveTintColor: "#5f0650",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ccc",
        },
        headerStyle: { backgroundColor: "#5f0650" },
        headerTintColor: "#fff"
      }}
    >
        <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="desktop" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      {userRole === "admin" && (
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Configuración",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}