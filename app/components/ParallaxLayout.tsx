import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Layout from "./Layout";
import { Fonts, Colors } from "../themes";
import Navbar from "./Navbar";
import LayoutBtn from "./LayoutBtn";

interface Props {
  height?: number;
  title: string;
  bgImage: string;
}

const ParallaxLayout: React.FC<Props> = ({
  height = 250,
  title,
  bgImage,
  children,
}) => {
  return (
    <Layout title="" hideNavbar>
      <ScrollView>
        <ImageBackground source={{ uri: bgImage }} style={{ height }}>
          <View style={[styles.innerContainer, { height }]}>
            <Navbar
              title=""
              leftICon={
                <MaterialIcon
                  name="keyboard-arrow-left"
                  size={30}
                  color="white"
                />
              }
              rightIcon={<MaterialIcon name="edit" size={22} color="white" />}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
        {children}
        <View>
          <LayoutBtn
            title="Block this user"
            icon={
              <MaterialCommunityIcon
                name="message-bulleted-off"
                size={24}
                color={Colors.red}
              />
            }
          />
          <LayoutBtn
            title="Delete all chat"
            icon={
              <MaterialCommunityIcon
                name="delete-sweep"
                size={24}
                color={Colors.red}
              />
            }
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: 25,
    marginBottom: 20,
    fontFamily: Fonts.textSemibold,
    color: "white",
    fontSize: 20,
  },
});

export default ParallaxLayout;
