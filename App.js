import "react-native-gesture-handler";
import Navigation from "./src/routes/Navigation";
import { LogBox } from "react-native";
import { NavigationProvider } from "./src/context/Navigation";
import { DarkModeProvider } from "./src/context/DarkMode";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <DarkModeProvider>
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
    </DarkModeProvider>
  );
}
