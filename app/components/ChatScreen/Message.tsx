import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MessageModel } from "../../interfaces";
import { Colors, Fonts } from "../../themes";

interface Props {
  message: MessageModel;
}

const Message: React.FC<Props> = ({ message }) => {
  let msg: JSX.Element | null = null;

  if (message.type === "text") {
    msg = (
      <>
        <Text style={styles.textMsg}>{message.message}</Text>
        <Text
          style={[styles.msgTime, message.me ? styles.myMsgTime : undefined]}>
          {message.time}
        </Text>
      </>
    );
  }

  const backgroundColor = message.me ? Colors.bg.accent : Colors.bg.warn;

  return (
    <View
      style={[
        { display: "flex", flexDirection: "row" },
        message.me ? styles.myMsg : undefined,
      ]}>
      <View style={[styles.container, { backgroundColor }]}>{msg}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Colors.bg.warn,
    marginBottom: 10,
    maxWidth: "70%",
    position: "relative",
  },
  myMsg: {
    flexDirection: "row-reverse",
  },
  textMsg: {
    fontSize: 14,
    color: "#EAEAEE",
    fontFamily: Fonts.textRegular,
    lineHeight: 18,
  },
  msgTime: {
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: [{ translateX: 45 }, { translateY: 12 - 7 }],
    color: Colors.txt.accent,
    fontSize: 10,
    fontFamily: Fonts.textRegular,
    zIndex: 9,
  },
  myMsgTime: {
    left: "auto",
    right: "100%",
    transform: [{ translateX: -45 }, { translateY: 12 - 7 }],
  },
});

export default Message;
