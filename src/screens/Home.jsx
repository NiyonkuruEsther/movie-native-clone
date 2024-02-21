import { View, Text, Dimensions, ImageBackground } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

export const heightFull = Dimensions.get("window").height;
export const widthFull = Dimensions.get("window").width;

const Home = ({ isLoading }) => {
  return !isLoading ? (
    // Home screen
    <ImageBackground
      source={require("../../assets/jocker2.webp")}
      resizeMode="cover"
      resizeMethod="scale"
      height={heightFull}
      width={widthFull}
      className="h-[812px]"
    >
      <View className="bg-bgDarkSecondary flex-1 opacity-70 justify-end px-5" >
        <View className=" h-[60%] justify-between pb-10">
          {/* Intro text */}
          <View className=" gap-y-4">
            <Text className="text-white text-3xl font-bold">
              Enjoy your favourite movie anywhere
            </Text>
            <Text className=" text-[19px] text-white">
              Browse through our collections and discover hundreds of movies and
              series that you'll love!
            </Text>
            <View className="flex-row gap-x-2 pt-2">
              <View className="bg-yellowPrimary h-2 w-14 rounded-full"></View>
              <View className="bg-grayPrimary h-2 w-6 rounded-full"></View>
              <View className="bg-grayPrimary h-2 w-6 rounded-full"></View>
            </View>
          </View>
          <Button text="Get started" bgColor={"yellowPrimary"} />
        </View>
      </View>
    </ImageBackground>
  ) : (
    // loader
    <View className="px-5 h-[812px] bg-bgDarkPrimary overflow-hidden">
      <View
        className={`h-[${heightFull}px] flex-1 justify-center items-center overflow-hidden`}
      >
        <Logo />
      </View>
    </View>
  );
};

export default Home;
