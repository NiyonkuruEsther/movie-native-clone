import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../components/Layout";
import InputLabel from "../../components/form/InputLabel";
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schema";
import { heightFull } from "../Home";

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = () => {
    reset({
      email: "",
      password: ""
    });
  };

  return (
    <SafeAreaView
      className={`flex-1 bg-bgDarkPrimary px-[16px] pt-3 pb-5 h-[${heightFull}px]`}
    >
      <KeyboardAvoidingView behavior="position" className={`flex-1`}>
        <View className={`justify-between h-full `}>
          <View className="flex-row gap-5 items-center">
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <AntDesign name="arrowleft" color="#FDD031" size={30} />
            </TouchableOpacity>
            <Text className="text-white font-bold text-2xl">Login</Text>
          </View>
          <Logo style="text-3xl" />
          <Text className="text-white text-lg text-center ">
            Please Login to enjoy more benefits and we won't let You go.
          </Text>
          <View className="gap-4">
            <View className="gap-y-3">
              {/* Inputs */}
              <View className="pb-4">
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      iconName="email-outline"
                      label="Email"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text className="text-red-500 pt-2">
                    {errors.email.message}
                  </Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      iconName="lock-outline"
                      label="Password"
                      onChange={onChange}
                      value={value}
                      secureTextEntry={true}
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text className="text-red-500 pt-2">
                    {errors.password.message}
                  </Text>
                )}

                <TouchableOpacity className="self-end pt-3">
                  <Text className="text-yellowPrimary">Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Button
                bgColor="yellowPrimary"
                text="Login"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
            <View className="">
              <Text className="text-white text-[10px] text-center mb-3">
                or simply login with
              </Text>
              <View className="mb-3">
                <Button
                  bgColor="ebonyBlack"
                  text="Login with Apple"
                  icon={<AntDesign name="apple1" color="white" size={20} />}
                />
              </View>
              <View className="mb-3">
                <Button
                  bgColor="white"
                  text="Login with Google"
                  icon={
                    <Image
                      source={{
                        uri: "data:image/png;base64,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"
                      }}
                      width={25}
                      height={17}
                    />
                  }
                />
              </View>
            </View>
          </View>
          <View className="flex-row justify-center items-center">
            <Text className="text-white text-xs text-center ">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.push("SignUp")}
              className="p-0"
            >
              <Text className="text-yellowPrimary">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;