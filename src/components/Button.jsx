import { Text, TouchableOpacity } from "react-native";
import React, { ElementType } from "react";

const Button = ({ icon, bgColor, text, onPress }) => {
  return (
    <TouchableOpacity
      className={`bg-${bgColor} rounded-lg py-3 justify-center flex-row items-center`}
      onPress={onPress}
    >
      {icon}
      <Text
        className={`text-center ${bgColor === "black" && "text-white"} ${
          icon && "pl-3"
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
