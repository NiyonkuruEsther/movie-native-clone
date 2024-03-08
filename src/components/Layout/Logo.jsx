import { View, Text, Image } from "react-native";
import React from "react";

const Logo = ({ style }) => {
  return (
    <View className="flex-row items-center justify-center gap-x-2">
      <View className="bg-yellowPrimary rounded-lg px-6 py-2 flex-row items-center justify-center">
        <Text className={`font-bold ${style || "text-5xl"}`}>M</Text>
      </View>

      <Text
        className={`font-semibold ${
          style || "text-5xl"
        } text-black dark:text-white `}
      >
        Muvi
      </Text>
    </View>
  );
};

export default Logo;
