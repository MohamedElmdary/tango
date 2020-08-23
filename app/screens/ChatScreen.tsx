import React, { useRef, useEffect /* , useState */ } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Layout from "../components/Layout";
import ChatTopbarScreen from "../components/ChatScreen/ChatTopbar";
import ChatBottombar from "../components/ChatScreen/ChatBottombar";
import { users, messages } from "../store";
import Message from "../components/ChatScreen/Message";
import { MessageModel } from "../interfaces";

const ChatScreen: React.FC = () => {
  // const [endReached, setEndReached] = useState<boolean>(true);
  const messageRef = useRef<FlatList<MessageModel>>(null);

  // let cls: any;

  return (
    <Layout hideNavbar title="">
      <ChatTopbarScreen user={users[0]} lastSeen="8:10 am" />
      <FlatList
        ref={messageRef}
        inverted={true}
        // @Note: for reference
        // onScroll={({
        //   nativeEvent: {
        //     contentOffset: { y },
        //   },
        // }) => {
        //   if (y < 21 && !endReached) {
        //     return setEndReached(true);
        //   }
        //   if (!endReached) return;
        //   setEndReached(false);
        // }}
        // onContentSizeChange={() => {
        //   if (endReached) {
        //     messageRef.current?.scrollToEnd({ animated: true });
        //   }
        // }}
        contentContainerStyle={styles.messageContainer}
        data={messages}
        renderItem={({ item }) => <Message message={item} key={item.id} />}
        keyExtractor={({ id }) => id.toString()}
      />
      <ChatBottombar />
    </Layout>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 20,
  },
});

export default ChatScreen;
