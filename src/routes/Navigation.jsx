import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, Welcome } from "../screens";
import { SignUp, Login, ResetPassword } from "../screens/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigation from "./BottomNavigation";
import { getAuth } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthProvider } from "../context/Auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "125179321542-d6atbb0q9t923a9ilrgnc7igep80b0q5.apps.googleusercontent.com",
    androidClientId:
      "125179321542-d6atbb0q9t923a9ilrgnc7igep80b0q5.apps.googleusercontent.com"
  });

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

    if (response?.type == "success") {
      console.log("Success");
    }
    if (response?.error) {
      console.log(response.error);
    }
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home">
            {(props) => <Home {...props} isLoading={isLoading} />}
          </Stack.Screen>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login">
            {(props) => <Login {...props} promptAsync={promptAsync} />}
          </Stack.Screen>
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Navigation;
