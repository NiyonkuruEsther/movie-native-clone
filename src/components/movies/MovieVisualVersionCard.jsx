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
      source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}` }}
      resizeMode="cover"
      className={`justify-between ${
        horizontalDisplay && "mr-4"
      } ${imgSize} p-3 ${horizontalDisplay && index === 0 && "ml-5"}`}
      borderRadius={12}
    >
      <View className={`self-end bg-yellowPrimary rounded-md px-2 py-1`}>
        <Text className="font-medium">{item.visualVersion}</Text>
      </View>
    </ImageBackground>
  );
};

export default MovieVisualVersionCard;
