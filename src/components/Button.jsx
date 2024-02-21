import { Text, TouchableOpacity } from "react-native";
import React, { ElementType } from "react";

const Button = ({ icon, bgColor, text, onPress }) => {
  return (
    <TouchableOpacity
      className={`bg-${bgColor} rounded-lg py-3`}
      onPress={onPress}
    >
      {icon}
      <Text className="text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
