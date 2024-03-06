import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, Welcome } from "../screens";
import { SignUp, Login } from "../screens/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigation from "./BottomNavigation";
import ViewMoreMovies from "../screens/movies/ViewMoreMovies";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { getAuth } from "firebase/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const auth = FIREBASE_AUTH;

  useEffect(() => {
  
    const auth = getAuth();
      const user = auth.currentUser;
      console.log(auth);
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
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} isLoading={isLoading} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default Navigation;
