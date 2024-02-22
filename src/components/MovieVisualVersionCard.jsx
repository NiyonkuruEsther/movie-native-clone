import { View, Text, ImageBackground } from "react-native";
import React from "react";

const MovieVisualVersionCard = ({
  imgSize,
  item,
  index,
  horizontalDisplay
}) => {
  return (
    <ImageBackground
      key={index}
      source={{ uri: item.url }}
      resizeMode="cover"
      className={`justify-between mr-4 ${imgSize} p-3 ${
        horizontalDisplay && index === 0 && "ml-5"
      }`}
      borderRadius={12}
    >
      <View className={`self-end bg-yellowPrimary rounded-md px-2 py-1`}>
        <Text className="font-medium">{item.visualVersion}</Text>
      </View>
    </ImageBackground>
  );
};

export default MovieVisualVersionCard;
