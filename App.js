import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "./src/components/Button";
import Logo from "./src/components/Logo";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <ScrollView>
      <View className="px-5 h-[812px] bg-bgDarkPrimary overflow-hidden">
        <Home />
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}
