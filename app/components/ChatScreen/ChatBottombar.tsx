import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native-gesture-handler";

import IconButton from "../../components/IconButton";
import { Colors, Fonts } from "../../themes";
import { useNavigation, StackActions } from "@react-navigation/native";

const ChatBottombar: React.FC = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inpAction}>
          <IconButton>
            <SimpleLineIcon name="emotsmile" size={20} color="white" />
          </IconButton>
        </View>
        <TextInput
          multiline
          autoCorrect
          placeholder="Message…"
          keyboardAppearance="dark"
          style={styles.inp}
          placeholderTextColor={Colors.txt.warn}
        />
        <View style={[styles.inpAction, styles.inpActionMic]}>
          <IconButton>
            <SimpleLineIcon
              name="microphone"
              size={20}
              color={Colors.txt.accent}
            />
          </IconButton>
        </View>
      </View>
      <IconButton
        iconButtonRadius={35}
        onPress={() => {
          navigation.dispatch(StackActions.push("Camera"));
        }}>
        <MaterialIcon name="camera-alt" size={25} color={Colors.txt.accent} />
      </IconButton>
      <View>
        <IconButton iconButtonRadius={35}>
          <MaterialIcon name="image" size={25} color={Colors.txt.accent} />
        </IconButton>
      </View>
      <IconButton iconButtonRadius={35} background={Colors.bg.accent}>
        <EntypoIcon name="plus" size={25} color="white" />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopColor: Colors.divider,
    borderTopWidth: 1,
  },
  subContainer: {
    position: "relative",
    // flexGrow: 1,
    marginRight: 10,
    width:
      Dimensions.get("window").width - 40 /* padding */ - 40 * 3 /* buttons */,
  },
  inp: {
    borderWidth: 2,
    borderColor: Colors.bg.accent,
    flexGrow: 1,
    borderRadius: 20,
    paddingLeft: 45,
    paddingRight: 54,
    height: 50,
    display: "flex",
    alignItems: "center",
    color: Colors.txt.primary,
    fontSize: 14,
    fontFamily: Fonts.textRegular,
  },
  inpAction: {
    position: "absolute",
    left: 13,
    top: "50%",
    transform: [{ translateY: -15 }],
    zIndex: 9,
  },

  inpActionMic: {
    left: "auto",
    right: 15,
  },
});

export default ChatBottombar;
