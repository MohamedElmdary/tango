import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTab from "./BottomTab";
import CallingScreen from "../screens/CallingScreen";
import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";
import ChatScreen from "../screens/ChatScreen";
import CameraScreen from "../screens/CameraScreen";

const StackNavigator = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="BottomTab" component={BottomTab} />
      <StackNavigator.Screen name="Calling" component={CallingScreen} />
      <StackNavigator.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
      />
      <StackNavigator.Screen name="Chat" component={ChatScreen} />
      <StackNavigator.Screen name="Camera" component={CameraScreen} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
