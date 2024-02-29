import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";

import React, { useState } from "react";
import { widthFull } from "../Home";

const SingleMovieOverview = ({ route, navigation }) => {
  const { movie } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);

  const navData = ["Synopsis", "Cast"];

  console.log(movie);
  return (
    <View className="h-screen">
      {/* bg Image */}
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        }}
        className={`w-screen h-[40vh]`}
      >
        <View
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="h-full justify-between"
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pt-16 pb-5 flex-row px-5 gap-x-2 items-center "
          >
            <AntDesign name="arrowleft" color="#FDD031" size={25} />
            <Text
              className="text-white text-2xl font-semibold w-[70vw]"
              numberOfLines={1}
            >
              {movie.original_title}
            </Text>
          </TouchableOpacity>
          <View className="items-center">
            <Octicons name="play" size={50} color="#FDD031" />
          </View>
          <View className="pb-4 px-5">
            <Text className="text-white text-3xl font-semibold">
              {movie.original_title}
            </Text>
            <View className="flex-row gap-x-5 pt-2 items-center">
              <View className={` bg-yellowPrimary rounded-md px-2 py-1`}>
                <Text className="font-medium">
                  {movie.vote_average.toFixed(1)}
                </Text>
              </View>
              <Text className="text-gray-300">{movie.release_date}</Text>
              <Text className="text-gray-300">
                {movie.adult === false ? "13+" : "18+"}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Nav menu */}
      <View className=" bg-bgDarkSecondary w-screen">
        <FlatList
          className="px-5"
          columnWrapperStyle={{
            justifyContent: "space-between"
          }}
          data={navData}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setActiveIndex(index)}
              className={`
            ${
              activeIndex === index &&
              "text-yellowPrimary border-b-2 pb-2 border-yellowPrimary"
            } pt-4`}
              underlayColor={"white"}
            >
              <Text
                className={` ${
                  activeIndex === index ? "text-yellowPrimary " : "text-white"
                } text-base`}
              >
                <Text>{item}</Text>
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View className="bg-bgDarkPrimary h-full px-5 pt-5">
        <Text className="text-white text-base" numberOfLines={4}>
          {movie.overview}
        </Text>
      </View>
    </View>
  );
};

export default SingleMovieOverview;
