import React from "react";
import { FlatList } from "react-native-gesture-handler";

import Layout from "../components/Layout";
import { contacts } from "../store";
import Contact from "../components/ChatScreen/Contact";

const ChatScreen: React.FC = () => {
  return (
    <Layout>
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

export default ChatScreen;
