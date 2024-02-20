import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Logo from "../components/Logo";

const Home = () => {
  const heightFull = Dimensions.get("window").height;
  return (
    <View
      className={`h-[${heightFull}px] flex-1 justify-center items-center overflow-hidden`}
    >
      <Logo />
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
