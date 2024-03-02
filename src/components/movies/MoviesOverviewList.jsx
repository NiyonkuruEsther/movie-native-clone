import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MovieVisualVersion from "./MovieVisualVersionCard";
import { useNavigation } from "@react-navigation/native";

const MoviesOverviewlist = ({
  data,
  title,
  viewMore,
  imgSize,
  horizontalDisplay
}) => {
  const navigation = useNavigation();
  return (
    <View className="gap-y-5 flex-1 pt-5 ">
      {title && (
        <View className="flex-row justify-between items-center px-5">
          <View>
            <Text className="font-bold text-white text-2xl">{title}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ViewMoreMovies", {
                title: title,
                movies: data
              })
            }
          >
            <Text className="text-gray-400">{viewMore && "View More"}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="justify-center items-center">
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <MovieVisualVersion
              item={item}
              imgSize={imgSize}
              index={index}
              horizontalDisplay={horizontalDisplay}
            />
          )}
          horizontal={horizontalDisplay}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default MoviesOverviewlist;
