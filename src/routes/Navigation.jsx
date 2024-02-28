import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, Search, Welcome } from "../screens";
import { SignUp, Login } from "../screens/Auth";
import { MoviesOverview } from "../screens/movies";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
        setIsLoading(false)
      );
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="Home"
      >
        <Stack.Screen name="Search" component={Search} />

        {/* <Stack.Screen name="Home">
          {(props) => <Home {...props} isLoading={isLoading} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movies" component={MoviesOverview} /> */}
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default Navigation;
