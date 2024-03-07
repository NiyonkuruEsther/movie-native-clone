import "react-native-gesture-handler";
import DrawerNavigation from "./src/routes/DrawerNavigation";
import Navigation from "./src/routes/Navigation";
import { LogBox } from "react-native";
import BottomNavigation from "./src/routes/BottomNavigation";

LogBox.ignoreAllLogs();

export default function App() {
  return <BottomNavigation />;
}
