import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { Fonts, Colors } from "../../themes";
import { ContactModel } from "../../interfaces";

interface Props {
  contact: ContactModel;
  onPress?(e: GestureResponderEvent): void;
}

const Contact: React.FC<Props> = ({ contact, onPress = () => null }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={contact.image} style={styles.image} />
            <View
              style={[
                styles.status,
                { backgroundColor: contact.online ? Colors.green : Colors.red },
              ]}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.name}>
                {/* \n */}
                {contact.name}
              </Text>
              <Text
                style={[
                  styles.message,
                  {
                    fontFamily: contact.messageNo
                      ? Fonts.textSemibold
                      : Fonts.textRegular,
                    color: contact.messageNo
                      ? Colors.txt.warn
                      : Colors.txt.accent,
                  },
                ]}
                numberOfLines={1}>
                {contact.message}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <View
                style={[
                  styles.messageNo,
                  {
                    backgroundColor: contact.messageNo
                      ? Colors.bg.accent
                      : undefined,
                  },
                ]}>
                {contact.messageNo ? (
                  <Text style={styles.messageNoText}>{contact.messageNo}</Text>
                ) : null}
              </View>
              <Text style={[styles.message, { fontSize: 10 }]}>
                {/* \n */}
                {contact.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 20,
    position: "relative",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
  },
  status: {
    position: "absolute",
    left: 5,
    bottom: 0,
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
    borderWidth: 1,
    borderColor: "white",
  },
  infoContainer: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  name: {
    fontFamily: Fonts.displaySemibold,
    color: Colors.txt.primary,
    fontSize: 17,
  },
  message: {
    fontFamily: Fonts.textRegular,
    fontSize: 14,
    color: Colors.txt.accent,
  },
  dateContainer: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
  },
  messageNo: {
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  messageNoText: {
    color: Colors.txt.primary,
    fontFamily: Fonts.textRegular,
    fontSize: 9,
  },
});

export default Contact;
