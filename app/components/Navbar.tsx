import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { Colors, Fonts } from "../themes";
import IconButton from "./IconButton";

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <IconButton>
        <MaterialIcon name="menu" size={20} color={Colors.txt.primary} />
      </IconButton>
      <Text style={styles.title}>{title}</Text>
      <IconButton>
        <MaterialIcon name="search" size={20} color={Colors.txt.primary} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.textSemibold,
    fontSize: 24,
    color: Colors.txt.primary,
  },
});

export default Navbar;
