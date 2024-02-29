import { View, Text, ScrollView, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getGenre, getMovies } from "../fetch";
import { SearchCard } from "../components/movies";
const Search = () => {
  const [movies, setMovies] = useState({ movies: [] });
  const [genreList, setGenreList] = useState([]);
  const [searchKeyword, setSearchkeyword] = useState("");
  const [searchResults, setResearchResults] = useState({ movies: [] });
  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
      setMovies
    );
    getGenre(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      setGenreList
    );
  }, []);
  const getSearchResults = () => {
    getMovies(
      `https://api.themoviedb.org/3/search/movie?query=${
        searchKeyword && searchKeyword
      }&include_adult=true&language=en-US`,
      setResearchResults
    );
  };

  const mapGenres = (genreIds) => {
    let genreNames = [];
    genreIds.forEach((genreId) => {
      const genre = genreList.find((item) => item.id === genreId);
      genreNames.push(genre && genre.name);
    });
    return genreNames;
  };

  return (
    <View className="bg-bgDarkPrimary flex-1">
      <View className="bg-bgDarkSecondary pt-16 gap-y-4 mb-5">
        <Text className="text-3xl text-white px-5">Search</Text>
        <View className="flex-row justify-between px-5 h-14 bg-[#2C2D31] items-center gap-x-3">
          <TextInput
            className="flex-1 h-full text-white"
            placeholder="Type title, category, years, etc..."
            placeholderTextColor={"gray"}
            selectionColor={"white"}
            onChangeText={(text) => {
              setSearchkeyword(text);
              getSearchResults();
              console.log(searchKeyword, searchResults);
            }}
          />
          <AntDesign
            name="search1"
            size={25}
            color={"#FDD031"}
            onPress={getSearchResults}
          />
        </View>
      </View>
      <View className="flex-1 px-5 mb-12">
        <Text className="text-white text-xl pb-5">
          {searchKeyword ? "Search Results" : "Popular Movies"}
        </Text>
        <FlatList
          data={searchKeyword ? searchResults.movies : movies.movies}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          renderItem={({ item }) => (
            <SearchCard item={item} genres={mapGenres(item.genre_ids)} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;
