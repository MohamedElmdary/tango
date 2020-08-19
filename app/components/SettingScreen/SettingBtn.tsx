import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

import IconButton from "../../components/IconButton";
import { Colors, Fonts } from "../../themes";
import { SettingButtonModel } from "interfaces";

interface Props {
  btn: SettingButtonModel;
}

const SettingBtn: React.FC<Props> = ({ btn }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableNativeFeedback style={styles.container}>
        <View style={styles.subContainer}>
          <LinearGradient {...btn.bg} style={styles.gradientContainer}>
            {btn.icon}
          </LinearGradient>
          <Text style={styles.txt}>{btn.title}</Text>
        </View>
        <IconButton>
          <MaterialIcon name="keyboard-arrow-right" size={30} color="#A3A4B3" />
        </IconButton>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  gradientContainer: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 17,
    color: Colors.txt.primary,
    fontFamily: Fonts.displaySemibold,
    marginLeft: 15,
  },
});

export default SettingBtn;
