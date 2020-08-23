import React, { useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import IconButton from "../components/IconButton";
import { Colors, Fonts } from "../themes";

interface Props extends Partial<StackScreenProps<any>> {}

const CameraScreen: React.FC<Props> = ({ navigation }) => {
  const cameraRef = useRef<RNCamera>(null);
  const [flash, setFlash] = useState<boolean>(true);
  const [front, setFront] = useState<boolean>(true);

  const _onTakeImage = () => {
    console.log(cameraRef.current);

    cameraRef?.current
      ?.takePictureAsync({
        base64: true,
        doNotSave: true,
      })
      .then((data) => {
        console.log(data.base64);
        navigation?.goBack();
      })
      .catch(() => {
        console.log("something went wrong");
      })
      .finally(navigation?.goBack);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraTopbar}>
        <IconButton
          onPress={() => {
            navigation?.goBack();
          }}
          background={Colors.bg.accent}
          iconButtonRadius={40}>
          <MaterialCommunityIcon name="close" size={24} color="white" />
        </IconButton>
        <View style={styles.topbarRightActions}>
          <IconButton background={Colors.bg.accent} iconButtonRadius={40}>
            <MaterialCommunityIcon
              name="moon-waning-crescent"
              size={24}
              color="white"
            />
          </IconButton>
          <View style={{ width: 15 }} />
          <IconButton
            onPress={() => {
              setFlash(!flash);
            }}
            background={Colors.bg.accent}
            iconButtonRadius={40}>
            <MaterialCommunityIcon
              name={flash ? "flash-off" : "flash"}
              size={24}
              color="white"
            />
          </IconButton>
        </View>
      </View>
      <RNCamera
        style={styles.camera}
        ref={cameraRef}
        type={RNCamera.Constants.Type[front ? "front" : "back"]}
        flashMode={RNCamera.Constants.FlashMode[flash ? "on" : "off"]}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
        captureAudio={false}
      />
      <View style={styles.cameraBottombar}>
        <View style={styles.bottombarActions}>
          <IconButton background={Colors.bg.accent} iconButtonRadius={40}>
            <MaterialCommunityIcon
              name="image-multiple"
              size={24}
              color="white"
            />
          </IconButton>
          <View style={[styles.takePhoto, { borderWidth: 0 }]}>
            <TouchableNativeFeedback
              onPress={_onTakeImage}
              style={styles.takePhoto}
            />
          </View>
          <IconButton
            onPress={() => {
              setFront(!front);
            }}
            background={Colors.bg.accent}
            iconButtonRadius={40}>
            <MaterialCommunityIcon
              name="rotate-3d-variant"
              size={24}
              color="white"
            />
          </IconButton>
        </View>
        <Text style={styles.holdTxt}>Hold for video, tap for photo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  cameraTopbar: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 30,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  topbarRightActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cameraBottombar: {
    position: "absolute",
    zIndex: 9,
    bottom: 0,
    left: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  bottombarActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  takePhoto: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
  },
  holdTxt: {
    color: "white",
    fontFamily: Fonts.textRegular,
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});

export default CameraScreen;
