import React from "react";

import ParallaxLayout from "../components/ParallaxLayout";
import { View, Text } from "react-native";

const ProfileDetailsScreen: React.FC = () => {
  return (
    <ParallaxLayout title="Majed Khan" bgImage="http://lorempixel.com/500/500">
      <View>
        <Text>middle</Text>
      </View>
    </ParallaxLayout>
  );
};

export default ProfileDetailsScreen;
