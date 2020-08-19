import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Colors } from "../themes";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <SafeAreaView>
      <LinearGradient {...Colors.bg.primary}>
        <View style={styles.container}>
          <Navbar />
          {children}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});

export default Layout;
