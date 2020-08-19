import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

import Layout from "../components/Layout";
import { Colors, Fonts } from "../themes";
import { stories } from "../store";
import StoryList from "../components/StoryScreen/StoryList";

const StoryScreen: React.FC = () => {
  return (
    <Layout
      title="Story"
      showRightIcon={false}
      leftICon={
        <IonIcon
          name="md-chevron-back-sharp"
          size={25}
          color={Colors.txt.primary}
        />
      }>
      <ScrollView>
        <TouchableNativeFeedback style={styles.addStory}>
          <View style={{ position: "relative" }}>
            <Image source={stories.user.image} style={styles.image} />
            <View style={styles.plusBtn}>
              <AntDesignIcon name="plus" size={10} color="white" />
            </View>
          </View>
          <View>
            <Text style={styles.name}>{stories.user.name}</Text>
            <Text style={styles.status}>Tap to add status</Text>
          </View>
        </TouchableNativeFeedback>
        <StoryList title="Recent updates" stories={stories.recentUpdates} />
        <StoryList title="See All Stories" stories={stories.stories} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  addStory: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.bg.warn,
    alignItems: "center",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    marginRight: 15,
  },
  plusBtn: {
    position: "absolute",
    right: 15,
    bottom: 0,
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    backgroundColor: Colors.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: Fonts.displaySemibold,
    fontSize: 17,
    color: Colors.txt.primary,
    marginBottom: 3,
  },
  status: {
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
    fontSize: 14,
  },
});

export default StoryScreen;
