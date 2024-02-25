import {
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Logo } from "../components/Layout";
import { Button } from "../components";
import { Data } from "../data";
import { useNavigation } from "@react-navigation/core";
import Carousel from "react-native-snap-carousel";
import { getItems } from "../fetch";

export const heightFull = Dimensions.get("window").height;
export const widthFull = Dimensions.get("window").width;

const Home = ({ isLoading }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const sliderWidth = Dimensions.get("window").width;
  const itemWidth = sliderWidth - 20;
  const [currentImageUrl, setCurrentImageUrl] = useState();

  useEffect(() => {
    getItems(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
      setMovies,
      ["results"]
    );

  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity className="gap-y-4 px-4">
        <Text className="text-white text-3xl font-bold">
          {Data[index].title}
        </Text>
        <Text className=" text-[19px] text-white">
          {Data[index].description}
        </Text>
      </TouchableOpacity>
    );
  };

  return !isLoading ? (
    // Home screen
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/original${currentImageUrl}`
      }}
      resizeMode="cover"
      resizeMethod="scale"
      height={heightFull}
      width={widthFull}
      className="h-[812px]"
    >
      <TouchableOpacity
        className="bg-[#1F2123] flex-1 justify-end"
        style={{ opacity: 0.7 }}
      >
        <TouchableOpacity className=" h-[60%] justify-between pb-10">
          {/* Intro text */}
          <TouchableOpacity className="gap-y-5">
            <Carousel
              ref={carouselRef}
              layout={"default"}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              data={movies.slice(0, 4)}
              onSnapToItem={(index) => {
                if (index >= 0 && index <= 4) {
                  setActiveIndex(index);
                  setCurrentImageUrl(movies[index].backdrop_path);
                }
              }}
            />
            <TouchableOpacity className="flex-row gap-x-2 pt-2 pl-7">
              {[1, 2, 3, 4].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: index === activeIndex ? "yellow" : "gray",
                    width: index === activeIndex ? 50 : 20,
                    height: 6
                  }}
                  className={`rounded-full`}
                ></TouchableOpacity>
              ))}
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity className="px-7">
            <Button
              text="Get started"
              bgColor={"yellowPrimary"}
              onPress={() => navigation.push("Welcome")}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </ImageBackground>
  ) : (
    // loader
    <TouchableOpacity className="px-4 h-[812px] bg-bgDarkPrimary overflow-hidden">
      <TouchableOpacity
        className={`h-[${heightFull}px] flex-1 justify-center items-center overflow-hidden`}
      >
        <Logo />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Home;
