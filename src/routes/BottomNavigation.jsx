import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../screens";
import MoviesOverview from "../screens/movies/MoviesOverview";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="MoviesOverview"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1F2123", borderTopWidth: 0 }
      }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#FDD031",
        inactiveTintColor: "white"
      }}
    >
      <Tab.Screen
        name="MoviesOverview"
        component={MoviesOverview}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
