import { View, Text, Image } from "react-native";
import React from "react";

const SearchCard = ({ item, genre }) => {
  return (
    <View className={` h-[17vh] gap-x-5 flex-row`}>
      <View className={`w-[45vw]`}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
          }}
          className={`w-full h-full`}
        />
      </View>

      <View className="justify-between w-[40vw]">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="font-medium text-lg text-white"
        >
          {item.original_title}
        </Text>
        <Text className="font-medium text-lg text-grayPrimary">
          {item.release_date}
        </Text>
        <Text className=" text-grayPrimary">{genre}</Text>
      </View>
    </View>
  );
};

export default SearchCard;
