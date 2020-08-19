import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";

import Layout from "../components/Layout";
import { contacts } from "../store";
import Contact from "../components/ChatScreen/Contact";
import IconButton from "../components/IconButton";
import { Colors } from "../themes";

const ChatScreen: React.FC = () => {
  return (
    <Layout title="Chat">
      <View style={styles.flootBtn}>
        <IconButton iconButtonRadius={50} background={Colors.bg.accent}>
          <FeatherIcon name="plus" size={34} color={Colors.txt.primary} />
        </IconButton>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={contacts}
        renderItem={({ item }) => {
          return <Contact contact={item} key={item.id} />;
        }}
        keyExtractor={({ id }) => id.toString()}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  flootBtn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 99,
  },
});

export default ChatScreen;
