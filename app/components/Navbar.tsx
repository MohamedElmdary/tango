import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { Colors } from "../themes";
import IconButton from "./IconButton";

const Navbar: React.FC = () => {
  return (
    <View style={styles.container}>
      <IconButton>
        <MaterialIcon name="menu" size={20} color={Colors.txt.primary} />
      </IconButton>
      <Text
        style={{
          // fontFamily: ''
          fontSize: 24,
          color: Colors.txt.primary,
        }}>
        Message
      </Text>
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
    marginVertical: 35,
  },
});

export default Navbar;
