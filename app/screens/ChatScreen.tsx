import React from "react";
import { View, Text } from "react-native";

import IconButton from "../components/IconButton";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const ChatScreen: React.FC = () => {
  return (
    <View>
      <Text>chat screen</Text>
      <IconButton iconButtonRadius={30}>
        <AntDesignIcon name="user" size={20} color="black" />
      </IconButton>
    </View>
  );
};

export default ChatScreen;
