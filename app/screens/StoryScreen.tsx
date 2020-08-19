import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";

import Layout from "../components/Layout";
import { Colors } from "../themes";
import { stories } from "../store";
import StoryList from "../components/StoryScreen/StoryList";
import AddStoryBtn from "../components/StoryScreen/AddStoryBtn";

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
        <AddStoryBtn user={stories.user} status="Tap to add status" />
        <StoryList title="Recent updates" stories={stories.recentUpdates} />
        <StoryList title="See All Stories" stories={stories.stories} />
      </ScrollView>
    </Layout>
  );
};

export default StoryScreen;
