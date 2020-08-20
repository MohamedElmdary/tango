import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

import Layout from "../components/Layout";
import IconButton from "../components/IconButton";
import { Colors, Fonts } from "../themes";

interface Props {
  callType?: "Video" | "Voice";
}

const CallingScreen: React.FC<Props> = ({ callType = "Voice" }) => {
  const [callAccepted, setCallAccepted] = useState<boolean>(false);

  const callingBtns = (
    <React.Fragment>
      <View style={{ marginRight: 80 }}>
        <IconButton background={Colors.red} iconButtonRadius={50}>
          <MaterialCommunityIcon name="phone-hangup" size={28} color="white" />
        </IconButton>
        <Text style={styles.btnTxt}>Decline</Text>
      </View>
      <View>
        <IconButton
          onPress={() => {
            setCallAccepted(true);
          }}
          background={Colors.green}
          iconButtonRadius={50}>
          <MaterialCommunityIcon name="phone" size={28} color="white" />
        </IconButton>
        <Text style={styles.btnTxt}>Accept</Text>
      </View>
    </React.Fragment>
  );

  const callAcceptedBtns = (
    <React.Fragment>
      <IconButton
        iconButtonRadius={50}
        containerStyle={{ borderColor: "white", borderWidth: 1 }}>
        <AntDesignIcon name="sound" size={28} color="white" />
      </IconButton>
      <View style={{ marginHorizontal: 20 }}>
        <IconButton
          iconButtonRadius={50}
          containerStyle={{ borderColor: "white", borderWidth: 1 }}>
          <MaterialCommunityIcon
            name="microphone-off"
            size={28}
            color="white"
          />
        </IconButton>
      </View>
      <IconButton
        onPress={() => {
          setCallAccepted(false);
        }}
        background={Colors.bg.primary.colors[1]}
        iconButtonRadius={50}>
        <MaterialCommunityIcon
          name="phone-hangup"
          size={28}
          color={Colors.red}
        />
      </IconButton>
    </React.Fragment>
  );

  const content = (
    <View
      style={[
        styles.container,
        callAccepted && callType === "Video"
          ? { backgroundColor: "rgba(0, 0, 0, 0.4)" }
          : undefined,
      ]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "http://placehold.it/180x180" }}
          style={[
            styles.image,
            callAccepted && callType === "Video" ? styles.videoCall : undefined,
          ]}
        />
        {callAccepted && callType === "Video" ? null : (
          <React.Fragment>
            <Text style={styles.imgTxt}>Mahed Khan</Text>
            {callAccepted ? <Text style={styles.callTime}>05:10</Text> : null}
          </React.Fragment>
        )}
      </View>
      <View style={styles.subContainer}>
        {callAccepted ? callAcceptedBtns : callingBtns}
      </View>
    </View>
  );

  return (
    <Layout title="" hideNavbar>
      {callAccepted && callType === "Video" ? (
        <ImageBackground
          source={{ uri: "http://placehold.it/1501x1001/black" }}
          style={styles.videoBackground}>
          {content}
        </ImageBackground>
      ) : (
        content
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 116,
    width: 116,
    borderRadius: 116 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  imgTxt: {
    marginTop: 15,
    fontFamily: Fonts.textBold,
    color: Colors.txt.primary,
    fontSize: 17,
  },
  callTime: {
    color: Colors.txt.primary,
    fontSize: 14,
    fontFamily: Fonts.textSemibold,
    marginTop: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 200,
    marginBottom: 80,
  },
  btnTxt: {
    marginTop: 7,
    color: Colors.txt.primary,
    fontFamily: Fonts.textSemibold,
    fontSize: 14,
  },

  /* video call */
  videoCall: {
    borderWidth: 0,
    borderRadius: 0,
    width: 115,
    height: 135,
    marginBottom: 50,
    transform: [
      { translateX: Dimensions.get("screen").width / 2 - 115 / 2 - 20 },
      { translateY: -50 },
    ],
  },
  videoBackground: {
    width: "100%",
    height: "100%",
  },
});

export default CallingScreen;
