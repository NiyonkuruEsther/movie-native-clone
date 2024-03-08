import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppSettings from "../screens/profile/AppSettings";
import Inbox from "../screens/profile/Inbox";
import Profile from "../screens/profile/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      // screenOptions={{ headerShown: false }}
      // drawerContent={{}}
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AppSettings" component={AppSettings} />
      <Drawer.Screen name="Inbox" component={Inbox} />

      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
