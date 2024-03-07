import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Profile } from "../screens";
import AppSettings from "../screens/profile/AppSettings";
import Inbox from "../screens/profile/Inbox";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AppSettings" component={AppSettings} />
      <Drawer.Screen name="Inbox" component={Inbox} />

      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
