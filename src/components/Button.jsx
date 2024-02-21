import { Text, TouchableOpacity } from "react-native";
import React, { ElementType } from "react";

const Button = ({ icon, bgColor, text }) => {
  return (
    <TouchableOpacity className={`bg-${bgColor} rounded-lg py-3`}>
      {icon}
      <Text className="text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
