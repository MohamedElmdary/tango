import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Sound from "react-native-sound";

import { MessageModel } from "../../interfaces";
import { Colors, Fonts } from "../../themes";
import IconButton from "../../components/IconButton";

interface Props {
  message: MessageModel;
}

const Message: React.FC<Props> = ({ message }) => {
  let msg: JSX.Element | null = null;
  // const [play, setPlay] = useState<boolean>(false);

  let voice: Sound;

  if (message.type === "text") {
    msg = (
      <>
        <Text style={styles.textMsg}>{message.message}</Text>
        <Text
          style={[styles.msgTime, message.me ? styles.myMsgTime : undefined]}>
          {message.time}
        </Text>
      </>
    );
  } else if (message.type === "image") {
    const reset = message.message.length - 3;
    const dims = { width: 60, height: 60 };

    if (message.message.length === 1) {
      dims.width = dims.height = 3 * 60;
    } else if (message.message.length === 2) {
      dims.width = dims.height = 1.5 * 60;
    }

    msg = (
      <View style={styles.imagesContainer}>
        {message.message.slice(0, 3).map((uri, i) => (
          <Image
            key={i}
            source={{ uri }}
            style={[
              dims,
              { borderRadius: 8, marginHorizontal: i === 1 ? 5 : 0 },
            ]}
          />
        ))}
        {reset > 0 ? (
          <View style={styles.imageOverlay}>
            <Text style={styles.resetImageTxt}>+{reset}</Text>
          </View>
        ) : null}
      </View>
    );
  } else {
    voice = new Sound(message.message, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("Something weong happen");
      }
    });

    msg = (
      <View style={styles.voiceContainer}>
        <IconButton
          onPress={() => {
            /* should load voice and play it */
          }}>
          <EntypoIcon
            name={voice.isPlaying() ? "controller-paus" : "controller-play"}
            size={20}
            color={message.me ? Colors.bg.warn : Colors.bg.accent}
          />
        </IconButton>
        <View style={styles.voiceLength}>
          <View
            style={[
              styles.voiceBar,
              {
                backgroundColor: message.me ? Colors.bg.warn : Colors.bg.accent,
              },
            ]}
          />
          <View
            style={[
              styles.currentVoice,
              {
                backgroundColor: message.me ? Colors.bg.warn : Colors.bg.accent,
              },
            ]}
          />
          <Text
            style={[
              styles.voiceTime,
              { color: message.me ? Colors.txt.primary : Colors.txt.accent },
            ]}>
            02:30
          </Text>
        </View>
        <View
          style={[
            styles.voiceIndicator,
            { backgroundColor: message.me ? Colors.bg.warn : Colors.bg.accent },
          ]}>
          <EntypoIcon name="mic" size={20} color="white" />
          <Text style={styles.voiceDuration}>04:30</Text>
        </View>
      </View>
    );
  }

  const backgroundColor = message.me ? Colors.bg.accent : Colors.bg.warn;

  return (
    <View
      style={[
        { display: "flex", flexDirection: "row" },
        message.me ? styles.myMsg : undefined,
      ]}>
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            paddingVertical: message.type === "text" ? 12 : 5,
            paddingHorizontal: message.type === "text" ? 15 : 5,
            maxWidth: message.type === "voice" ? "auto" : "70%",
            width: message.type === "voice" ? "70%" : "auto",
          },
        ]}>
        {msg}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.bg.warn,
    marginBottom: 10,
    position: "relative",
  },
  myMsg: {
    flexDirection: "row-reverse",
  },
  textMsg: {
    fontSize: 14,
    color: "#EAEAEE",
    fontFamily: Fonts.textRegular,
    lineHeight: 18,
  },
  msgTime: {
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: [{ translateX: 45 }, { translateY: 12 - 7 }],
    color: Colors.txt.accent,
    fontSize: 10,
    fontFamily: Fonts.textRegular,
    zIndex: 9,
  },
  myMsgTime: {
    left: "auto",
    right: "100%",
    transform: [{ translateX: -45 }, { translateY: 12 - 7 }],
  },

  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  imageOverlay: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
  },
  resetImageTxt: {
    fontFamily: Fonts.textSemibold,
    color: "white",
    fontSize: 16,
  },

  voiceContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  voiceLength: {
    marginHorizontal: 10,
    flexGrow: 1,
    position: "relative",
    backgroundColor: "pink",
  },
  voiceBar: {
    height: 3,
  },
  currentVoice: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
    transform: [{ translateY: -4 }],
  },
  voiceTime: {
    position: "absolute",
    top: 12,
    left: 0,
    fontSize: 10,
    fontFamily: Fonts.textRegular,
  },
  voiceIndicator: {
    flexBasis: 50,
    height: 54,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  voiceDuration: {
    fontFamily: Fonts.textRegular,
    color: "white",
    fontSize: 10,
    marginTop: 3,
  },
});

export default Message;
