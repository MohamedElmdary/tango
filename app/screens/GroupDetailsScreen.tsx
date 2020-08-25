import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import ParallaxLayout from "../components/ParallaxLayout";
import { Fonts, Colors } from "../themes";
import IconButton from "../components/IconButton";
import { FlatList } from "react-native-gesture-handler";
import { images, users } from "../store";
import GroupUser from "../components/MessageScreen/GroupUser";

const myUsers = users.slice(0, 9);

const GroupDetailsScreen: React.FC = () => {
  return (
    <ParallaxLayout
      title="Only Friends Group"
      bgImage="http://placehold.it/1500x1200/purple">
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.header}>Group Description</Text>
          <Text style={styles.description}>
            It’s through mistakes that you actually can grow You have to get bad
            in order to get good
          </Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <View style={styles.subContainer}>
            <Text style={styles.header}>Group Description</Text>
            <IconButton>
              <MaterialIcon
                name="keyboard-arrow-right"
                size={25}
                color="white"
              />
            </IconButton>
          </View>
          <FlatList
            horizontal={true}
            data={images}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.img} />
            )}
            keyExtractor={({ uri }) => uri}
          />
        </View>
      </View>
      <View style={[styles.container, { paddingHorizontal: 20 }]}>
        <View style={[styles.subContainer, { padding: 0 }]}>
          <Text style={styles.header}>{myUsers.length} Members</Text>
          <IconButton>
            <MaterialIcon name="search" size={25} color="white" />
          </IconButton>
        </View>
        {myUsers.map((user, idx) => (
          <GroupUser user={user} idAdmin={idx === 1} key={user.id} />
        ))}
      </View>
    </ParallaxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: Colors.bg.warn,
    borderRadius: 8,
    marginVertical: 20,
  },
  header: {
    fontFamily: Fonts.textSemibold,
    color: "white",
    fontSize: 17,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.textRegular,
    color: Colors.txt.accent,
    marginBottom: 30,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  img: {
    height: 90,
    width: 82,
    borderRadius: 6,
    marginRight: 8,
  },
});

export default GroupDetailsScreen;
