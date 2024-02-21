import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "./src/components/Button";
import Logo from "./src/components/Logo";
import Home from "./src/screens/Home";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcom from "./src/screens/Welcome";
import Welcome from "./src/screens/Welcome";
import SiginIn from "./src/screens/SignUp";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
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
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} isLoading={isLoading} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
