import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, Welcome } from "../screens";
import { SignUp, Login, ResetPassword } from "../screens/Auth";
import BottomNavigation from "./BottomNavigation";
import { getAuth } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthProvider } from "../context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "125179321542-d6atbb0q9t923a9ilrgnc7igep80b0q5.apps.googleusercontent.com",
    androidClientId:
      "125179321542-d6atbb0q9t923a9ilrgnc7igep80b0q5.apps.googleusercontent.com"
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await AsyncStorage.getItem("user");
      return user;
    };

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
        setIsLoading(false)
      );
    };

    fetchData();

    getCurrentUser().then((user) => {
      setCurrentUser(user);
    });

    if (response?.type === "success") {
      console.log("Success");
    }
    if (response?.error) {
      console.log(response.error);
    }
  }, [response]);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {currentUser ? (
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
            />
          ) : (
            [
              <Stack.Screen
                key="Home"
                name="Home"
                children={(props) => <Home {...props} isLoading={isLoading} />}
              />,
              <Stack.Screen key="Welcome" name="Welcome" component={Welcome} />,
              <Stack.Screen key="SignUp" name="SignUp" component={SignUp} />,
              <Stack.Screen
                key="Login"
                name="Login"
                children={(props) => (
                  <Login {...props} promptAsync={promptAsync} />
                )}
              />,
              <Stack.Screen
                key="ResetPassword"
                name="ResetPassword"
                component={ResetPassword}
              />
            ]
          )}
        </Stack.Navigator>
        <StatusBar style="light" />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Navigation;
