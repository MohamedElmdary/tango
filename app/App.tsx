import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Stack from "./routes/Stack";

const App = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0)");
  }, []);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
