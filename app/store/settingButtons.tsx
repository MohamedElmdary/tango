import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

import { SettingButtonModel, Gradient } from "../interfaces";

const iconSize = 22;

const SettingButtons: SettingButtonModel[] = [
  new SettingButtonModel(
    "Account",
    new Gradient(["#FD63F0", "#FFBEC0"]),
    <EntypoIcon name="user" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "Chat",
    new Gradient(["#DE85FF", "#6385E6"]),
    <EntypoIcon name="chat" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "Notification",
    new Gradient(["#BDC7FF", "#8387FF"]),
    <IonIcon name="notifications-outline" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "Privacy",
    new Gradient(["#BDE7FF", "#5FB3FD"]),
    <IonIcon name="lock-closed-sharp" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "Help",
    new Gradient(["#FEC38F", "#FC58FB"]),
    <IonIcon name="warning-outline" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "About",
    new Gradient(["#9497DF", "#4A4DB7"]),
    <IonIcon name="information-circle" size={iconSize} color="white" />,
  ),
  new SettingButtonModel(
    "Logout",
    new Gradient(["#FFB4B4", "#F46060"]),
    <AntDesignIcon name="poweroff" size={iconSize} color="white" />,
  ),
];

export { SettingButtons };
