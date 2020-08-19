import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { StoryModel } from "../../interfaces/storyModel";
import { Fonts, Colors } from "../../themes";

interface Props {
  story: StoryModel;
}

const Story: React.FC<Props> = ({ story }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableNativeFeedback style={styles.container}>
        <Image source={story.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{story.name}</Text>
          <Text style={styles.date}>{story.fromTime}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    marginRight: 15,
  },
  name: {
    fontFamily: Fonts.displaySemibold,
    fontSize: 17,
    color: Colors.txt.primary,
    marginBottom: 3,
  },
  date: {
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
    fontSize: 14,
  },
});

export default Story;
