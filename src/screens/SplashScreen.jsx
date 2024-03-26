import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { heightFull } from "./Home";
import { Logo } from "../components/Layout";

const SplashScreen = () => {
  return (
    <TouchableOpacity className="px-4 h-[812px]  bg-gray-300 dark:bg-bgDarkPrimary  overflow-hidden">
      <TouchableOpacity
        className={`h-[${heightFull}px] flex-1 justify-center items-center overflow-hidden`}
      >
        <Logo />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SplashScreen;
