import { View, Text, ScrollView, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getGenre, getMovies } from "../fetch";
import { SearchCard } from "../components/movies";
const Search = () => {
  const [movies, setMovies] = useState({ movies: [] });
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
      setMovies
    );
    getGenre(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      setNavData
    );
  }, []);
  return (
    <View className="bg-bgDarkPrimary">
      <View className="bg-bgDarkSecondary pt-16 gap-y-4 ">
        <Text className="text-3xl text-white px-5">Search</Text>
        <View className="flex-row justify-between px-5 h-14 bg-[#2C2D31] items-center gap-x-3">
          <TextInput
            className="flex-1 h-full text-white"
            placeholder="Type title, category, years, etc..."
            placeholderTextColor={"gray"}
            selectionColor={"white"}
          />
          <AntDesign name="search1" size={25} color={"#FDD031"} />
        </View>
      </View>
      <FlatList
        data={movies.movies}
        className="px-5"
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={({ item }) => <SearchCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Search;
