import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Logo } from "../components/Layout";
import { Button } from "../components";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  updateCurrentUser
} from "firebase/auth";

const Welcome = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth.config);
  }, []);

  return (
    <View className="bg-bgDarkPrimary flex-1 justify-between">
      <View className={``}>
        <View className="bg-[#1F2123] pt-16 pb-4">
          <Logo style="text-2xl" />
        </View>
        <View className={`h-[55vh] justify-around`}>
          <View></View>
          <View className=" justify-center items-center">
            <Image
              source={require("../../assets/planet.png")}
              className="w-[200px] h-[200px] "
            />
          </View>

          <View className="gap-y-3 px-5 ">
            <Text className="text-white font-bold text-3xl text-center">
              Welcome to Muvi
            </Text>
            <Text className="text-[#A4A6A8] text-lg text-center">
              Free movie streaming all your needs everytime and everywhere
            </Text>
          </View>
        </View>
      </View>
      <View className="px-6 gap-y-3 pb-14">
        <Button
          text="Watch Movie"
          bgColor="yellowPrimary"
          onPress={() =>
            navigation.push(`${user === null ? "Login" : "BottomNavigation"}`)
          }
        />
        <TouchableOpacity onPress={() => navigation.push("Login")}>
          <Text className="text-white text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
