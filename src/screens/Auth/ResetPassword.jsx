import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../components/Layout";
import InputLabel from "../../components/form/InputLabel";
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { heightFull } from "../Home";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

const ResetPassword = ({ navigation }) => {
  const [resetSuccessful, setResetSuccessfull] = useState(null);
  const [loginError, setLoginError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required("Email is required").email("Invalid email")
      })
    ),
    defaultValues: {
      email: ""
    }
  });
  const auth = FIREBASE_AUTH;

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setResetSuccessfull(true);
      reset({
        email: ""
      });
      const user = FIREBASE_AUTH.currentUser;
      navigation.navigate("Login");

      console.log("Password reset successfully", resetSuccessful);
    } catch (error) {
      setResetSuccessfull(false);
      console.log(
        error.code,
        resetSuccessful,
        resetSuccessful !== null || loginError
      );
      if (error.code === "auth/too-many-requests") {
        setResetSuccessfull(
          "Too many request, Please reset Password or Try again later"
        );
        console.log(
          error.code,
          resetSuccessful,
          resetSuccessful !== null || loginError
        );
      } else if (error.code === "auth/invalid-credential") {
        setResetSuccessfull("Invalid credentials");
        console.log(
          error.code,
          resetSuccessful,
          resetSuccessful !== null || loginError
        );
      } else {
        console.log(resetSuccessful !== null || loginError);
      }
    }
    {
      (resetSuccessful !== null || loginError) &&
        showMessage({
          message: !resetSuccessful ? loginError : "Logged in successfully",
          type: !resetSuccessful ? "danger" : "success"
        });
    }
  };

  return (
    <SafeAreaView
      className={`flex-1  bg-gray-300 dark:bg-bgDarkPrimary  px-[16px] pt-3 pb-5 h-[${heightFull}px]`}
    >
      <FlashMessage
        duration={3000}
        position={"top"}
        message={
          !resetSuccessful && loginError
            ? { message: loginError }
            : { message: "Logged in successfully" }
        }
        textStyle={{ textAlign: "center" }}
      />

      <KeyboardAvoidingView behavior="position" className={`flex-1`}>
        <View className={`h-full `}>
          <View className="flex-row gap-5 items-center pb-20">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" color="#FDD031" size={30} />
            </TouchableOpacity>
            <Text className="text-black dark:text-white font-bold text-2xl">
              Reset Password
            </Text>
          </View>
          <Logo style="text-3xl " />

          <View className="gap-4 pt-20">
            <View className="pb-5">
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
              </View>
              <Button
                bgColor="yellowPrimary"
                text="Reset"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
            <View className="">
              <Text className="text-black dark:text-white text-[10px] text-center mb-3">
                Don't want to reset?
              </Text>
              <View className="mb-3">
                <Button
                  onPress={() => navigation.navigate("Login")}
                  bgColor="ebonyBlack"
                  text="Login"
                />
              </View>
              <View className="mb-3">
                <Button
                  onPress={() => navigation.navigate("SignUp")}
                  bgColor="white"
                  text="Sing up"
                />
              </View>
            </View>
          </View>
          {/* <View className="flex-row justify-center items-center">
            <Text className="text-black dark:text-white text-xs text-center ">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.push("SignUp")}
              className="p-0"
            >
              <Text className="dark:text-yellowPrimary text-gray-700 font-bold dark:font-normal   ">Sign Up</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;
