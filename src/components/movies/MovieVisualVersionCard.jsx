import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Skeleton } from "@rneui/themed";

const MovieVisualVersionCard = ({
  imgSize,
  item,
  index,
  horizontalDisplay
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (!isImageLoaded) {
    return (
      <View
        className={`${imgSize} ${horizontalDisplay && "mr-4"} ${imgSize} ${
          horizontalDisplay && index === 0 && "ml-5"
        }`}
      >
        <Skeleton height={"auto"} width={"auto"} />
      </View>
    );
  } else {
    return (
      <ImageBackground
        key={index}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}
        resizeMode="cover"
        className={`justify-between ${
          horizontalDisplay && "mr-4"
        } ${imgSize} p-3 ${horizontalDisplay && index === 0 && "ml-5"}`}
        borderRadius={12}
        onLoadStart={() => setIsImageLoaded(false)}
        onLoadEnd={() => setIsImageLoaded(true)}
      >
        <View className={`self-end bg-yellowPrimary rounded-md px-2 py-1`}>
          <Text className="font-medium">{item.vote_average.toFixed(1)}</Text>
        </View>
      </ImageBackground>
    );
  }
};

export default MovieVisualVersionCard;
