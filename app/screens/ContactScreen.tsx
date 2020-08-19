import React from "react";
import { FlatList } from "react-native-gesture-handler";

import Layout from "../components/Layout";
import { stories } from "../store";
import Story from "../components/StoryScreen/Story";

const ContactScreen: React.FC = () => {
  return (
    <Layout title="Contact">
      <FlatList
        data={stories.stories}
        renderItem={({ item }) => <Story story={item} key={item.id} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </Layout>
  );
};

export default ContactScreen;
