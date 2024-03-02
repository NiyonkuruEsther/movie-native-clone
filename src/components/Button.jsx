import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ icon, bgColor, text, onPress }) => {
  return (
    <TouchableOpacity
      className={` rounded-lg py-3 justify-center flex-row items-center`}
      style={{
        backgroundColor:
          bgColor === "ebonyBlack"
            ? "#080402"
            : bgColor === "yellowPrimary"
            ? "#FDD031"
            : "white"
      }}
      onPress={onPress}
    >
      {icon}
      <Text
        className={`text-center ${bgColor === "ebonyBlack" && "text-white"} ${
          icon && "pl-3"
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
