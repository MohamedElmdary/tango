import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";

import ParallaxLayout from "../components/ParallaxLayout";
import { Colors, Fonts } from "../themes";
import IconButton from "../components/IconButton";
import { images } from "../store";

const ProfileDetailsScreen: React.FC = () => {
  return (
    <ParallaxLayout title="Majed Khan" bgImage="http://lorempixel.com/500/500">
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.header}>About</Text>
          <Text style={styles.txt}>
            It’s through mistakes that you actually can grow You have to get bad
            in order to get good
          </Text>
        </View>
        <View>
          <View style={styles.mediaContainer}>
            <Text style={styles.header}>All Media</Text>
            <IconButton>
              <MaterialIcon
                name="keyboard-arrow-right"
                size={28}
                color={Colors.bg.accent}
              />
            </IconButton>
          </View>
          <View style={styles.scrollContainer}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({ item }) => (
                <Image style={styles.mediaImg} source={item} />
              )}
              keyExtractor={({ uri }) => uri}
            />
          </View>
        </View>
        <View style={styles.mobileContainer}>
          <View>
            <Text style={styles.mobile}>4-(941)-4550</Text>
            <Text style={styles.typeTxt}>Mobile</Text>
          </View>
          <View style={styles.mobileActions}>
            <IconButton iconButtonRadius={28} background={Colors.bg.accent}>
              <MaterialIcon name="videocam" size={17} color="white" />
            </IconButton>
            <View style={{ marginHorizontal: 10 }}>
              <IconButton iconButtonRadius={28} background={Colors.bg.accent}>
                <MaterialIcon name="phone" size={17} color="white" />
              </IconButton>
            </View>
            <IconButton iconButtonRadius={28} background={Colors.bg.accent}>
              <MaterialIcon name="message" size={17} color="white" />
            </IconButton>
          </View>
        </View>
      </View>
    </ParallaxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: Colors.bg.primary.colors[1],
    paddingVertical: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 17,
    fontFamily: Fonts.textSemibold,
    color: Colors.txt.primary,
    marginBottom: 10,
  },
  txt: {
    fontSize: 14,
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
    marginBottom: 30,
  },
  mediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  mediaImg: {
    height: 90,
    width: 82,
    borderRadius: 6,
    marginRight: 8,
  },
  mobileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  mobile: {
    fontSize: 17,
    fontFamily: Fonts.displaySemibold,
    color: Colors.txt.primary,
    marginBottom: 5,
  },
  typeTxt: {
    fontSize: 14,
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
  },
  mobileActions: {
    display: "flex",
    flexDirection: "row",
  },
});

export default ProfileDetailsScreen;
