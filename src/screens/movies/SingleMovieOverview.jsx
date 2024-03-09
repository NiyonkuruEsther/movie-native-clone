import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";

import React, { useEffect, useState } from "react";
import { getAllPeople, getMovies } from "../../fetch";
import YoutubePlayer from "react-native-youtube-iframe";
import { heightFull, widthFull } from "../Home";
import { Skeleton } from "@rneui/themed";
import WebView from "react-native-webview";

const SingleMovieOverview = ({ route, navigation }) => {
  const { movie } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const [video, setVideo] = useState({ movies: {} });
  const [people, setPeople] = useState([]);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const navData = ["Synopsis", "Trailer", "Cast"];

  useEffect(() => {
    getMovies(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      setVideo
    );
    getAllPeople("https://api.themoviedb.org/3/person/changes?", setPeople);
  }, []);

  // console.log(movie);c
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
              className="text-black dark:text-white text-2xl font-semibold w-[70vw]"
              numberOfLines={1}
            >
              {movie.original_title}
            </Text>
          </TouchableOpacity>
          <View className="items-center">
            <Octicons name="play" size={50} color="#FDD031" />
          </View>
          <View className="pb-4 px-5">
            <Text className="text-black dark:text-white text-3xl font-semibold">
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
      <View className=" bg-white dark:bg-bgDarkSecondary w-screen">
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
              "dark:text-yellowPrimary text-gray-700 font-bold dark:font-normal    border-b-2 pb-2 border-yellowPrimary"
            } pt-4`}
              underlayColor={"white"}
            >
              <Text
                className={` ${
                  activeIndex === index
                    ? "dark:text-yellowPrimary text-gray-700 font-bold dark:font-normal    "
                    : "text-black dark:text-white "
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

      <View className=" bg-gray-300 dark:bg-bgDarkPrimary  h-full px-5 pt-5 ">
        {activeIndex === 0 ? (
          <Text className="text-gray-300 text-base" numberOfLines={4}>
            {movie.overview}
          </Text>
        ) : activeIndex === 1 ? (
          <View
            style={{
              height: heightFull / 4,
              overflow: "hidden",
              paddingBottom: 20
            }}
          >
            {!isVideoLoaded && (
              <Skeleton
                height={heightFull / 4}
                width={"auto"}
                animation="wave"
              />
            )}
            <WebView
              containerStyle={{ backgroundColor: "black" }}
              style={{
                backgroundColor: "black",
                alignItems: "center",
                height: heightFull,
                flex: 1
              }}
              source={{
                uri: `https://www.youtube.com/embed/${video.movies[0].key}?rel=0&autoplay=0&showinfo=0&controls=0`
              }}
              scalesPageToFit={true}
              onLoadEnd={() => setIsVideoLoaded(true)}
              // onResponderEnd={() => setIsVideoLoaded(true)}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
            />
          </View>
        ) : (
          <Text className="text-gray-300 text-base" numberOfLines={4}>
            {people.map((item) => (
              <Text key={item.id}>
                {" "}
                {`ssssssssssssssssss ${item.details.id}`}
              </Text>
            ))}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SingleMovieOverview;
