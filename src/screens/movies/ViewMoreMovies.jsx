import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { MovieVisualVersionCard } from "../../components/movies";
import { useNavigation } from "@react-navigation/native";
import { heightFull, widthFull } from "../Home";

const ViewMoreMovies = ({ route }) => {
  const { title, movies } = route.params;

  return (
    <View className="bg-bgDarkSecondary flex-1">
      <View className="pt-16 ">
        <Text className="text-white text-2xl px-5">{title}</Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <FlatList
          data={movies}
          renderItem={({ item, index }) => (
            <View className="w-[40vw] mx-5">
              <MovieVisualVersionCard
                item={item}
                imgSize={`h-[30vh] w-[40vw]`}
                index={index}
                horizontalDisplay={false}
              />
              <Text className="text-white">{item.original_title}</Text>
              <Text className="text-white" numberOfLines={1}>
                {item.overview}
              </Text>
            </View>
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
