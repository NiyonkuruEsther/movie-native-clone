import { View, Text, Dimensions, ImageBackground } from "react-native";
import React, { useRef, useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Carousel from "react-native-snap-carousel";
import { Data } from "../data";
import { useNavigation } from "@react-navigation/core";

export const heightFull = Dimensions.get("window").height;
export const widthFull = Dimensions.get("window").width;

const Home = ({ isLoading }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const sliderWidth = Dimensions.get("window").width;
  const itemWidth = sliderWidth - 20;
  const renderItem = ({ item, index }) => {
    return (
      <View className="gap-y-4 px-5">
        <Text className="text-white text-3xl font-bold">{item.title}</Text>
        <Text className=" text-[19px] text-white">{item.description}</Text>
      </View>
    );
  };
  return !isLoading ? (
    // Home screen
    <ImageBackground
      source={{
        uri: "https://www.boredpanda.com/blog/wp-content/uploads/2020/01/3-5e12ff3d9c99c__700.jpg"
      }}
      resizeMode="cover"
      resizeMethod="scale"
      height={heightFull}
      width={widthFull}
      className="h-[812px]"
    >
      <View className="bg-bgDarkSecondary flex-1 opacity-70 justify-end">
        <View className=" h-[60%] justify-between pb-10">
          {/* Intro text */}
          <View className="gap-y-5">
            <Carousel
              ref={carouselRef}
              layout={"default"}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              data={Data}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <View className="flex-row gap-x-2 pt-2 pl-7">
              {Data.map((item, index) => (
                <View
                  key={index}
                  className={`bg-${
                    index === activeIndex ? "yellow" : "gray"
                  }Primary h-2 w-${
                    index === activeIndex ? "14" : "6"
                  } rounded-full`}
                ></View>
              ))}
            </View>
          </View>

          <View className="px-7">
            <Button
              text="Get started"
              bgColor={"yellowPrimary"}
              onPress={() => navigation.navigate("Welcome")}
            />
          </View>
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
