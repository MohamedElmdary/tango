import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import { Colors } from "../themes";

/* screens */
import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";
import StoryScreen from "../screens/StoryScreen";
import ContactScreen from "../screens/ContactScreen";

/* temp */
import { Text } from "react-native";
const Placeholder = () => <Text>Placeholder</Text>;

const BottomTabNavigator = createMaterialTopTabNavigator();

const BottomTab: React.FC = () => {
  const iconSize = 25;

  return (
    <BottomTabNavigator.Navigator
      backBehavior="history"
      tabBarPosition="bottom"
      initialRouteName="Contact"
      tabBarOptions={{
        pressColor: Colors.txt.primary,
        showIcon: true,
        renderIndicator: () => null,
        inactiveTintColor: Colors.txt.accent,
        activeTintColor: Colors.txt.warn,
        labelStyle: {
          textTransform: "none",
        },
        style: {
          backgroundColor: Colors.bg.warn,
        },
      }}>
      <BottomTabNavigator.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <MaterialIcon
                name="chat-bubble"
                size={iconSize}
                color={focused ? Colors.activeIcon : Colors.icon}
              />
            );
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="Call"
        component={CallScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <MaterialIcon
                name="phone"
                size={iconSize}
                color={focused ? Colors.activeIcon : Colors.icon}
              />
            );
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="Story"
        component={StoryScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <MaterialIcon
                name="camera-alt"
                size={iconSize}
                color={focused ? Colors.activeIcon : Colors.icon}
              />
            );
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon({ focused }) {
            return (
              <EntypoIcon
                name="users"
                size={iconSize}
                color={focused ? Colors.activeIcon : Colors.icon}
              />
            );
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={Placeholder}
        options={{
          tabBarIcon({ focused }) {
            return (
              <EntypoIcon
                name="user"
                size={iconSize}
                color={focused ? Colors.activeIcon : Colors.icon}
              />
            );
          },
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTab;
