import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "./src/components/Button";
import Logo from "./src/components/Logo";
import Home from "./src/screens/Home";
import { useEffect, useState } from "react";

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
    <ScrollView>
      <Home isLoading={isLoading} />
      <StatusBar style="light" />
    </ScrollView>
  );
}
