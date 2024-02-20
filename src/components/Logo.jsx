import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View className="flex-row items-center justify-center  gap-x-3">
      <View className="bg-yellowPrimary rounded-lg px-8 py-2">
        <Text className="font-bold text-5xl text-blsck">M</Text>
      </View>

      <Text className="font-semibold text-5xl text-white">Muvi</Text>
    </View>
  );
};

export default Logo;
