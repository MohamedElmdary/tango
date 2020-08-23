import React, { useRef } from "react";
import { View, Text, Button } from "react-native";
import { RNCamera } from "react-native-camera";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends Partial<StackScreenProps<any>> {}

const CameraScreen: React.FC<Props> = ({ navigation }) => {
  const cameraRef = useRef<RNCamera>(null);

  return (
    <View>
      <RNCamera
        style={{ height: 500 }}
        ref={cameraRef}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
        captureAudio={false}
      />
      <View style={{ marginTop: 50 }}>
        <Button
          title="Take Image"
          onPress={() => {
            if (cameraRef?.current) {
              cameraRef.current
                .takePictureAsync({
                  base64: true,
                  doNotSave: true,
                  quality: 100,
                  pauseAfterCapture: true,
                })
                .then((data) => {
                  console.log(data.base64);
                  navigation?.goBack();
                })
                .catch((err) => {
                  console.log("err", err);
                });
            }
          }}
        />
      </View>
    </View>
  );
};

export default CameraScreen;
