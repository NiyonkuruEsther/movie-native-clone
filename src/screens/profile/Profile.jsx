import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
const Profile = () => {
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  return (
    <View className="bg-bgGrayLighter flex-1">
      <View className="bg-bgDarkSecondary pt-16 gap-y-4 mb-5 ">
        <Text className="text-white text-xl mb-5 px-5">More</Text>
      </View>
      <View className="px-5 flex-row gap-x-5 justify-between pb-5">
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/pw/AP1GczOTgJD2xuZ8NmgOExNDa8onVOuLpbyb9IQLePZq1ch6187YC1zP_zNRSLogPhKByLd2HKo_loyv1X7v4VbUxqqYslGiLvDDo6R8Q1LvADTNB3TuTnls9kB-chLqAKBQXPEWB-W2pmiGohj14DeHxcHZogxVplp_lwSPfnJ1-GHmr1Dz1uIeyVDOKpbH8u-1spMg57uFQ9wAL7Cx7wFbCMf5EYDLxxgZjVniZj5MD-1IzltSqhxp44zW28D4IyWr5OJW__nqlpszegKVgUGyXJnSWaoNN7UvuGqG29PbaVdGoIR4zd1UsDaWQo28loajFushg1mhaNNrDCMe4aUn77fwb62j8ySTDiFM9lbrsMbt2c1IXywq6z6dZMRBtyKj15LNHyA5WdncRarbvik5C7LBowY30YCHxFE9oKMsEKOeWSM_IOAR9MkWNi-d7GGcEDxJFcfMj18GmrJ_zu8c1Y6L_JWy96pARhoGwpPYqE9H_G1YQ49PFi1QXDPyrawiYSDhvVXELHlcFjNiuffne0GMzfstpKUBmMJLAFMLTCnMeB2tsKBIq_2-4Xwm30O5BUv7e0geMcwJO08nNVvlvBm5KtXUPq6UbYCZQTXL9bmv68WHGgXovcPRmrVnIdetQvrB_YbADxC5HfGWdh2U5K-Hp3luPBgVqHV3Nwkc2X2IfxPZZ5UcVLI_AoMsEjlYapnqrbq_GXGmn7H7qEIiDslJsbU7J3aPO0WBz8NvrYOJR0PzROMG48J4zOW8AQ6c9-u1JQJPxHeARQd122QTZgoy0YYiGLfrsruaJKFVV4FkdrRJODf-HLexa1e2t8v2Vmwi1bIY99gYaV9TBZJ9m0r9640k5ZR_ruyvnlQFH7AUJCaqo5pDQ0z5PS4TLi99dqB6m-Bvy4uUJWLtNhFMWR_8znyA=w165-h220-no?authuser=0"
          }}
          height={100}
          width={"auto"}
          className="w-[30vw] rounded-lg"
        />
        <View className=" justify-center flex-1">
          <Text className="text-white font-semibold text-lg">Jonathan Doe</Text>
          <Text className="text-grayPrimary ">jon.doe@gmail.com</Text>
        </View>
        <TouchableOpacity className="gap-x-2 flex-row items-center">
          <Feather name="edit-2" color="#FDD031" />
          <Text className="text-yellowPrimary ">Edit</Text>
        </TouchableOpacity>
      </View>
      {/* Menu */}
      <View className="bg-bgDarkPrimary p-5 flex-1 justify-evenly">
        <View className="flex-row gap-x-3">
          <Feather name="inbox" color="white" size={25} />
          <Text className="text-white  text-lg opacity-95">Inbox </Text>
        </View>
        <View className="flex-row gap-x-3">
          <Feather name="user" color="white" size={25} />
          <Pressable onPress={() => auth.signOut()}>
            <Text className="text-white  text-lg opacity-95">Logout</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => console.log(user)}
          className="flex-row gap-x-3"
        >
          <Feather name="settings" color="white" size={25} />
          <Text className="text-white  text-lg opacity-95">App Settings</Text>
        </Pressable>
        <View className="flex-row gap-x-3">
          <Feather name="globe" color="white" size={25} />
          <Text className="text-white  text-lg opacity-95">Language</Text>
        </View>
        <View className="flex-row gap-x-3">
          <Feather name="info" color="white" size={25} />
          <Text className="text-white  text-lg opacity-95">Help, FAQ</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
