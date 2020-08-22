import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

import { Colors, Fonts } from "../../themes";
import { UserModel } from "../../interfaces";
import IconButton from "../../components/IconButton";

interface Props {
  user: UserModel;
  lastSeen: string;
}

const ChatTopbarScreen: React.FC<Props> = ({ user, lastSeen }) => {
  return (
    <View style={[styles.subContainer, styles.container]}>
      <View style={styles.subContainer}>
        <IconButton>
          <MaterialIcon name="keyboard-arrow-left" size={30} color="white" />
        </IconButton>
        <Image source={user.image} style={styles.image} />
        <View>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.seen}>Last Seen {lastSeen}</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <IconButton>
          <MaterialIcon name="videocam" size={22} color="white" />
        </IconButton>
        <View style={styles.actionBtns}>
          <IconButton>
            <MaterialIcon name="phone" size={22} color="white" />
          </IconButton>
        </View>
        <IconButton>
          <EntypoIcon name="dots-three-vertical" size={22} color="white" />
        </IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg.warn,
    paddingTop: 45,
    paddingHorizontal: 24,
    paddingBottom: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginHorizontal: 10,
  },
  username: {
    fontFamily: Fonts.textSemibold,
    fontSize: 16,
    color: "white",
    marginBottom: 1,
  },
  seen: {
    fontFamily: Fonts.textRegular,
    fontSize: 12,
    color: Colors.txt.warn,
  },
  actionBtns: {
    marginHorizontal: 10,
  },
});

export default ChatTopbarScreen;
