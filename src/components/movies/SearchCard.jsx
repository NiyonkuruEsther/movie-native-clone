import { View, Text, Image } from "react-native";
import React from "react";

const SearchCard = ({ item, genres }) => {
  return (
    <View className={` h-[17vh] gap-x-5 flex-row `}>
      <View className={`w-[45vw]`}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
          }}
          className={`w-full h-full`}
        />
      </View>

      <View className="justify-around w-[40vw]">
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
        <View className="flex-row flex-wrap gap-y-2">
          {genres.map((item) => (
            <Text className=" text-grayPrimary"> {item}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
