// App.js
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Modal, Pressable, SafeAreaView, Text } from "react-native";
import { NavigationContext } from "../context/Navigation";
import { MoviesOverview } from "../screens/movies";
import { heightFull } from "../screens/Home";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Logo } from "../components/Layout";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native";

const TabTabs = createMaterialTopTabNavigator();

const TabNavigation = () => {
  const { navData } = useContext(NavigationContext);
  const [showModal, setShowModal] = useState(false);
  const navItems = [];
  console.log(navData, "hhhhhhhhhhhhhhhhhhh");
  const ScreenNames =
    navData && navData.map((item) => navItems.push(item.name));

  return (
    <SafeAreaView className={` bg-[#1F2123] relative h-[${heightFull}px]`}>
      <View className="pl-5 pt-4">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Logo style={"text-2xl"} />
          </TouchableOpacity>
          <View className="flex-row gap-x-3 pr-5">
            <FontAwesome
              name="bookmark-o"
              size={25}
              color="white"
              onPress={() => setShowModal(true)}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setShowModal(false);
              }}
              style={{ position: "relative" }}
            >
              <SafeAreaView className="bg-white dark:bg-bgDarkSecondary absolute right-0 bottom-0 w-full h-1/3">
                <View className="flex-row justify-between p-5">
                  <Text className="text-black dark:text-white text-lg ">
                    Notifications
                  </Text>
                  <Pressable onPress={() => setShowModal(false)}>
                    <Text style={{ color: "white" }}>
                      <FontAwesome name="close" size={20} />
                    </Text>
                  </Pressable>
                </View>

                <Text className="px-5 text-black dark:text-white ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium pariatur fugit nam, eum distinctio officiis
                  doloremque voluptatibus sunt dicta, rem beatae illum neque
                  rerum repudiandae labore mollitia aliquid animi reprehenderit.
                </Text>
              </SafeAreaView>
            </Modal>
            <Feather name="bell" size={25} color="white" />
          </View>
        </View>
        {/* <TabNavigation navData={navData}/> */}
      </View>
      <TabTabs.Navigator
        overScrollMode="always"
        screenOptions={{
          tabBarActiveTintColor: "#FDD031",
          tabBarInactiveTintColor: "#cccccc",
          tabBarStyle: { backgroundColor: "#1F2123" },
          tabBarLabelStyle: { color: "#cccccc" },
          tabBarIndicatorStyle: { backgroundColor: "#FDD031" },
          tabBarBounces: true
        }}
        tabBarOptions={{
          scrollEnabled: true
        }}
      >
        {navItems &&
          navItems
            .slice(3)
            .map((screenName, index) => (
              <TabTabs.Screen
                key={index}
                name={screenName}
                component={MoviesOverview}
              />
            ))}
      </TabTabs.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;
