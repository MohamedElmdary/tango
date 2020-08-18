import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTab from "./BottomTab";

const StackNavigator = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="Chat" component={BottomTab} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
