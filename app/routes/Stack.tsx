import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTab from "./BottomTab";
import CallingScreen from "../screens/CallingScreen";

const StackNavigator = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="Calling"
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="Chat" component={BottomTab} />
      <StackNavigator.Screen name="Calling" component={CallingScreen} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
