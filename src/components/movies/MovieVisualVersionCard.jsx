import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Skeleton } from "@rneui/themed";
import { TextInput } from "react-native";

const MovieVisualVersionCard = ({
  imgSize,
  item,
  index,
  horizontalDisplay,
  vote
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  // state, function to update the state

  const [email, setEmail] = useState("");

  const onEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <ImageBackground
      key={index}
      source={{
        uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
      }}
      resizeMode="cover"
      className={`justify-between ${horizontalDisplay && " mr-4 "} ${imgSize} ${
        isImageLoaded && "p-3 "
      } ${horizontalDisplay && index === 0 && "ml-5 "}`}
      borderRadius={12}
      onLoadStart={() => setIsImageLoaded(false)}
      onLoadEnd={() => setIsImageLoaded(true)}
    >
      {!isImageLoaded && (
        <Skeleton
          height={"auto"}
          width={"auto"}
          animation="wave"
          style={{ borderRadius: 20 }}
        />
      )}
      {isImageLoaded && vote && (
        <View className={`self-end bg-yellowPrimary rounded-md px-2 py-1`}>
          <Text className="font-medium">{item.vote_average.toFixed(1)}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default MovieVisualVersionCard;
