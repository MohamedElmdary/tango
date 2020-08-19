import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";

import Layout from "../components/Layout";
import { Colors } from "../themes";
import AddStoryBtn from "../components/StoryScreen/AddStoryBtn";
import { stories, SettingButtons } from "../store";
import SettingBtn from "../components/SettingScreen/SettingBtn";

const SettingScreen: React.FC = () => {
  return (
    <Layout
      title="Setting"
      showRightIcon={false}
      leftICon={
        <IonIcon
          name="md-chevron-back-sharp"
          size={25}
          color={Colors.txt.primary}
        />
      }>
      <ScrollView>
        <AddStoryBtn
          user={stories.user}
          status="I am a UI/UX Designe"
          hidePlus
        />
        <View style={styles.container}>
          {SettingButtons.map((btn) => (
            <SettingBtn btn={btn} key={btn.title} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    backgroundColor: Colors.bg.warn,
    borderRadius: 14,
    paddingVertical: 20,
  },
});

export default SettingScreen;
