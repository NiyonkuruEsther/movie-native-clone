import "react-native-gesture-handler";
import Navigation from "./src/routes/Navigation";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  return <Navigation />;
}
