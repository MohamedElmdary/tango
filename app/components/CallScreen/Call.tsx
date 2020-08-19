import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { CallModal } from "../../interfaces";
import { Colors, Fonts } from "../../themes";
import IconButton from "../../components/IconButton";

interface Props {
  call: CallModal;
}

const Call: React.FC<Props> = ({ call }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <TouchableNativeFeedback onPress={() => null}>
        <View style={styles.container}>
          <View>
            <Image source={call.image} style={styles.image} />
          </View>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.name}>{call.name}</Text>
              <View style={styles.date}>
                <MaterialIcon
                  name={call.byYou ? "call-made" : "call-received"}
                  size={16}
                  color={call.byYou ? Colors.green : Colors.red}
                />
                <Text style={styles.dateTxt}>{call.fromDate}</Text>
              </View>
            </View>
            <View>
              <IconButton iconButtonRadius={40}>
                <MaterialIcon
                  name={call.type === "Video" ? "video-call" : "phone"}
                  size={24}
                  color={Colors.bg.accent}
                />
              </IconButton>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
  },
  innerContainer: {
    flexGrow: 1,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  name: {
    fontFamily: Fonts.displaySemibold,
    color: Colors.txt.primary,
    fontSize: 15,
    marginBottom: 3,
  },
  date: {
    display: "flex",
    flexDirection: "row",
  },
  dateTxt: {
    marginLeft: 8,
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
  },
});

export default Call;
