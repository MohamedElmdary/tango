import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Colors } from "../themes";
import Navbar from "./Navbar";

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <SafeAreaView>
      <LinearGradient {...Colors.bg.primary}>
        <View style={styles.container}>
          <Navbar title={title} />
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
