import {
  View,
  Text,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Pressable
} from "react-native";
import React, { useEffect, useState } from "react";
import {} from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MoviesData } from "../../data";
import { heightFull, widthFull } from "../Home";
import MoviesOverviewlist from "../../components/movies/MoviesOverviewList";
import { Logo } from "../../components/Layout";
import { getGenre, getMovies } from "../../fetch";
import { Skeleton } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabNavigation from "../../routes/TabNavigation";

const MoviesOverview = ({ navigation }) => {
  const getToken = AsyncStorage.getItem("token-user");
  const [showModal, setShowModal] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [newReleasedMovies, setNewRelesedMovies] = useState({
    movies: []
  });
  const [madeForYouMovies, setMadeForYouMovies] = useState({
    movies: []
  });
  const [popularMovies, setPopularMovies] = useState({
    movies: []
  });
  const [upcomingMovies, setUpcomingMovies] = useState({
    movies: []
  });

  const [data, setData] = useState([
    "Popular Today",
    "Marvel",
    "Fans Choice",
    "Star Watch"
  ]);

  const [navData, setNavData] = useState([]);

  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
      setPopularMovies
    );
    getMovies(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      setMadeForYouMovies
    );
    getMovies(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      setNewRelesedMovies
    );
    getMovies(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      setUpcomingMovies
    );
    getGenre(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      setNavData
    );
  }, []);

  return (
    <View className={` bg-[#1F2123] relative h-[${heightFull}px]`}>
      <ScrollView
        className="flex-1"
        style={{ height: heightFull }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <ScrollView>
          <View className=" bg-gray-300 dark:bg-bgDarkPrimary  flex-1 pt-5">
            {/* Tags */}

            <FlatList
              className=" h-auto"
              data={navData}
              renderItem={({ item, index }) => (
                <View
                  className={`border border-gray-400 rounded-lg h-auto justify-center ${
                    index === 0 ? "ml-5" : "ml-3"
                  } `}
                >
                  <Text className={` p-3 text-black dark:text-white `}>
                    {item.name}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            {/* Gallery */}
            {madeForYouMovies.isLoading ? (
              <Skeleton height={300} width={300} />
            ) : (
              <View className="">
                <MoviesOverviewlist
                  data={newReleasedMovies.movies}
                  horizontalDisplay={true}
                  imgSize={"w-[60vw] h-[20vh]"}
                  title={"New Releases"}
                  viewMore={true}
                />
              </View>
            )}

            {/* Gallery 2 */}
            <View className="">
              <MoviesOverviewlist
                data={madeForYouMovies.movies}
                horizontalDisplay={true}
                imgSize={"w-[60vw] h-[20vh]"}
                title={"Made for you"}
                viewMore={true}
              />
            </View>

            {/* Gallery 3 */}
            <View className="pb-5">
              <MoviesOverviewlist
                data={[...upcomingMovies.movies].reverse()}
                horizontalDisplay={true}
                imgSize={"w-[60vw] h-[20vh]"}
                title={"Upcoming"}
                viewMore={true}
              />
            </View>
          </View>
          {/* Gallery 3 */}
          <View
            className=" flex-row flex-1 items-center justify-center"
            style={{ width: widthFull }}
          >
            <MoviesOverviewlist
              data={[...popularMovies.movies].reverse()}
              horizontalDisplay={false}
              imgSize={`w-[90vw] h-[30vh] mb-5`}
              title={`Popular on Muvi`}
              viewMore={true}
            />
          </View>
        </ScrollView>
      </ScrollView>

      {/* Bottom nav */}
      {/* <View
        className=" flex-row justify-between  bg-gray-300 dark:bg-bgDarkPrimary  absolute bottom-0 px-5 py-[4vh]"
        style={{ width: widthFull }}
      >
        <Feather name="home" size={25} color="#FDD031" />
        <Feather name="search" size={25} color="white" />
        <Feather name="folder" size={25} color="white" />
        <Image source={require("../../../assets/menu.png")} />
      </View> */}
    </View>
  );
};

export default MoviesOverview;
