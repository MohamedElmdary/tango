import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { StoryModel } from "../../interfaces/storyModel";
import { Colors, Fonts } from "../../themes";
import Story from "./Story";

interface Props {
  title: string;
  stories: StoryModel[];
}

const StoryList: React.FC<Props> = ({ title, stories }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {stories.map((s) => (
          <Story story={s} key={s.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    marginLeft: 20,
    color: Colors.txt.primary,
    fontFamily: Fonts.displayRegular,
    fontSize: 17,
    marginBottom: 10,
  },
});

export default StoryList;
