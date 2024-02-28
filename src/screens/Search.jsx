import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <ScrollView>
      {/* <SafeAreaView> */}
      <View className="bg-[#1F2123] pt-16 pb-4 gap-y-4 ">
        <Text className="text-3xl text-white px-5">Search</Text>
        <TextInput
          // theme={{ colors: {surface: "#424245"}, }}
          right={<TextInput.Icon icon="Search" />}
        />
      </View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

export default Search;
