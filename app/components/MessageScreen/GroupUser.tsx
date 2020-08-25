import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { UserModel } from "../../interfaces";
import { Fonts, Colors } from "../../themes";

interface Props {
  user: UserModel;
  idAdmin: boolean;
}

const GroupUser: React.FC<Props> = ({ user, idAdmin }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "flex-start" },
        ]}>
        <Image source={user.image} style={styles.img} />
        <View>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.description}>
            I didn't change, I just grew up.
          </Text>
        </View>
      </View>
      <View>{idAdmin ? <Text style={styles.admin}>Admin</Text> : null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 15,
  },
  username: {
    fontSize: 14,
    fontFamily: Fonts.displaySemibold,
    color: "white",
    marginBottom: 1,
  },
  description: {
    fontFamily: Fonts.textRegular,
    fontSize: 12,
    color: Colors.txt.accent,
  },
  admin: {
    fontSize: 14,
    fontFamily: Fonts.displaySemibold,
    color: "#5C4DF7",
  },
});

export default GroupUser;
