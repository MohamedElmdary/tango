import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { Colors, Fonts } from "../themes";

interface Props {
  bg?: string;
  color?: string;
  icon: JSX.Element;
  title: string;
}

const LayoutBtn: React.FC<Props> = ({
  bg = Colors.bg.primary.colors[1],
  icon,
  color = Colors.red,
  title,
}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={[styles.innerContainer, { backgroundColor: bg }]}>
        {icon}
        <Text style={[styles.txt, { color }]}>{title}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  innerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    marginLeft: 15,
    fontSize: 15,
    fontFamily: Fonts.displaySemibold,
  },
});

export default LayoutBtn;
