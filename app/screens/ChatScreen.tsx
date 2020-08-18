import React from "react";
import { View, Text } from "react-native";

import AntDesignIcon from "react-native-vector-icons/AntDesign";

import IconButton from "../components/IconButton";
import Layout from "../components/Layout";

const ChatScreen: React.FC = () => {
  return (
    <Layout>
      <View>
        <Text>chat screen</Text>
        <IconButton iconButtonRadius={30}>
          <AntDesignIcon name="user" size={20} color="black" />
        </IconButton>
      </View>
    </Layout>
  );
};

export default ChatScreen;
