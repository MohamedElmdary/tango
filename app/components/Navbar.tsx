import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { Colors, Fonts } from "../themes";
import IconButton from "./IconButton";

interface Props {
  title: string;
  leftICon?: JSX.Element;
  rightIcon?: JSX.Element;
  showRightIcon?: boolean;
}

const Navbar: React.FC<Props> = ({
  title,
  leftICon = <MaterialIcon name="menu" size={20} color={Colors.txt.primary} />,
  rightIcon = (
    <MaterialIcon name="search" size={20} color={Colors.txt.primary} />
  ),
  showRightIcon = true,
}) => {
  return (
    <View style={styles.container}>
      <IconButton>{leftICon}</IconButton>
      <Text style={styles.title}>{title}</Text>
      {showRightIcon ? (
        <IconButton>{rightIcon}</IconButton>
      ) : (
        <View style={{ width: 30 }} />
      )}
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
