import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { MovieVisualVersionCard } from "../../components/movies";
import { widthFull } from "../Home";
import AntDesign from "react-native-vector-icons/AntDesign";

const ViewMoreMovies = ({ route, navigation }) => {
  const { title, movies } = route.params;

  return (
    <View className="bg-bgDarkSecondary flex-1">
      <TouchableOpacity
        className="pt-16 pb-5 flex-row items-center px-5 gap-x-2"
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" color="#FDD031" size={25} />
        <Text className="text-white text-2xl ">{title}</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} className="bg-bgDarkPrimary ">
        <FlatList
          data={movies}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="w-[40vw] mx-5 mt-5"
              onPress={() =>
                navigation.navigate("SingleMovieOverview", { movie: item })
              }
            >
              <MovieVisualVersionCard
                item={item}
                imgSize={`h-[30vh] w-[40vw]`}
                index={index}
                horizontalDisplay={false}
              />
              <Text className="text-white pt-3" numberOfLines={1}>
                {item.original_title}
              </Text>
              <Text className="text-white opacity-80 pt-px" numberOfLines={1}>
                {item.overview}
              </Text>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingBottom: 20,
            flex: 1,
            width: widthFull
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ViewMoreMovies;
