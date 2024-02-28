import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Search}
          options={{
            tabBarIcon: ({}) => (
              <AntDesign name="home" size={30} color={"black"} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
