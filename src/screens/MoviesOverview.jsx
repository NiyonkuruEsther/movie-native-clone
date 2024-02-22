import {
  View,
  Text,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { MoviesData } from "../data";
import { heightFull, widthFull } from "./Home";
import {} from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../components/Logo";

const MoviesOverview = () => {
  const [data, setData] = useState([
    "Popular Today",
    "Marvel",
    "Fans Choice",
    "Star Watch"
  ]);

  const [navData, setNavData] = useState([
    "Featured",
    "Series",
    "Films",
    "Originals"
  ]);

  const loadMoreData = () => {
    setData([...data, ...data]);
  };

  const [movies, setMovies] = useState(MoviesData);

  const loadMoreDataClothes = () => {
    setMovies([...movies, ...movies]);
  };

  const loadMoreDataNavData = () => {
    setNavData([...navData, ...navData]);
  };

  return (
    <SafeAreaView
      className={` bg-bgDarkSecondary relative h-[${heightFull}px]`}
    >
      <ScrollView className="flex-1" style={{ height: heightFull }}>
        {/* Header */}
        <View className="px-5 pt-4">
          <View className="flex-row justify-between items-center">
            <Logo style={"text-2xl"} />
            <View className="flex-row gap-x-3">
              <Feather name="bookmark" size={25} color="white" />
              <Feather name="bell" size={25} color="white" />
            </View>
          </View>
          <FlatList
            ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
            data={navData}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                className={`
            ${
              index === 0 &&
              "text-yellowPrimary border-b-2 pb-2 border-yellowPrimary"
            } pt-4`}
                underlayColor={"white"}
              >
                <Text
                  className={` ${
                    index === 0 ? "text-yellowPrimary " : "text-white"
                  } text-base`}
                >
                  <Text>{item}</Text>
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMoreDataNavData}
          />
        </View>
        <View className="bg-bgDarkPrimary flex-1 pt-5">
          {/* Tags */}

          <FlatList
            className=" h-auto"
            data={data}
            renderItem={({ item, index }) => (
              <View
                className={`border border-gray-400 rounded-lg h-auto justify-center ${
                  index === 0 ? "ml-5" : "ml-3"
                } `}
              >
                <Text className={` p-3 text-white `}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMoreData}
          />
          {/* Gallery */}
          <View className="px-5 gap-y-5 flex-1 pt-5 ">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-white text-2xl">
                New Releases
              </Text>
              <Text className="text-gray-400"> View More</Text>
            </View>
            <FlatList
              // className="gap-4 bg-white"
              data={movies}
              renderItem={({ item, index }) => (
                <ImageBackground
                  key={index}
                  source={{ uri: item.url }}
                  resizeMode="cover"
                  className="justify-between mr-4 w-[60vw] h-[20vh] p-3"
                  borderRadius={12}
                >
                  <View className=" self-end bg-yellowPrimary rounded-md px-2 py-1">
                    <Text className="font-medium">{item.visualVersion}</Text>
                  </View>
                </ImageBackground>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReached={loadMoreDataClothes}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom nav */}
      <View
        className=" flex-row justify-between bg-bgDarkPrimary absolute bottom-0 px-5 py-[4vh]"
        style={{ width: widthFull }}
      >
        <Feather name="home" size={25} color="white" />
        <Feather name="search" size={25} color="white" />
        <Feather name="folder" size={25} color="white" />
        <Feather name="folder" size={25} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default MoviesOverview;
