import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

import { Colors, Fonts } from "../../themes";
import { UserModel } from "../../interfaces/UserModel";

interface Props {
  user: UserModel;
  status: string;
  hidePlus?: boolean;
}

const AddStoryBtn: React.FC<Props> = ({ user, status, hidePlus = false }) => {
  return (
    <TouchableNativeFeedback style={styles.addStory}>
      <View style={{ position: "relative" }}>
        <Image source={user.image} style={styles.image} />
        {hidePlus ? null : (
          <View style={styles.plusBtn}>
            <AntDesignIcon name="plus" size={10} color="white" />
          </View>
        )}
      </View>
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  addStory: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.bg.warn,
    alignItems: "center",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    marginRight: 15,
  },
  plusBtn: {
    position: "absolute",
    right: 15,
    bottom: 0,
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    backgroundColor: Colors.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: Fonts.displaySemibold,
    fontSize: 17,
    color: Colors.txt.primary,
    marginBottom: 3,
  },
  status: {
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
    fontSize: 14,
  },
});

export default AddStoryBtn;
