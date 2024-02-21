import { View, Text } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-bgDarkPrimary px-[16px] pt-3">
      <View className="flex-1 justify-between">
        <View className="flex-row gap-5 items-center">
          <AntDesign name="arrowleft" color="#FDD031" size={30} />
          <Text className="text-white font-bold text-2xl">Register</Text>
        </View>
        <View className="flex-1 justify-between items-center py-14">
          <Logo style="text-3xl" />
          <Text className="text-white text-lg text-center ">
            Sign up to discover all our movies and enjoy our features.
          </Text>
          <View className="gap-y-3">
            {/* Inputs */}

            <View className="py-10">
              <InputLabel iconName="email-outline" label="Email" />
              <InputLabel iconName="lock-outline" label="Passowrd" />
              <InputLabel iconName="lock-outline" label="Confirm-Password" />
            </View>
            <Button bgColor="yellowPrimary" text="Sign Up" />
            <Text className="text-white text-xs text-center">
              By signing up I accept{" "}
              <Text className="text-yellowPrimary">terms of use</Text> and{" "}
              <Text className="text-yellowPrimary">privacy policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
