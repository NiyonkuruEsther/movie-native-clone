import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { heightFull } from "../Home";
import { Logo } from "../../components/Layout";
import Feather from "react-native-vector-icons/Feather";
import MyList from "./MyList";
import Downloads from "./Downloads";

const File = ({ navigation }) => {
  const [navData, setNavData] = useState(["My list", "Downloaded"]);
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   getMovies(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-US",
  //     setPopularMovies
  //   );
  //   getMovies(
  //     "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  //     setMadeForYouMovies
  //   );
  //   getMovies(
  //     "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //     setNewRelesedMovies
  //   );
  //   getMovies(
  //     "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  //     setUpcomingMovies
  //   );
  //   getGenre(
  //     "https://api.themoviedb.org/3/genre/movie/list?language=en",
  //     setNavData
  //   );
  // }, []);

  return (
    <SafeAreaView
      className={` bg-white dark:bg-[#1F2123]  relative h-[${heightFull}px]`}
    >
      <View className="pl-5 pt-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("MoviesOverview")}
          className="flex-row justify-between items-center"
        >
          <Logo style={"text-2xl"} />
        </TouchableOpacity>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
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
                  activeIndex === index
                    ? "text-yellowPrimary "
                    : "text-black dark:text-white "
                } text-base`}
              >
                <Text>{item}</Text>
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView className=" bg-gray-300 dark:bg-bgDarkPrimary  p-5 ">
        {activeIndex === 0 ? <MyList /> : <Downloads />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default File;
