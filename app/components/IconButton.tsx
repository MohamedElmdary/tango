import React from "react";
import {
  StyleSheet,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { Colors } from "../themes";

interface Props {
  iconButtonRadius?: number;
  onPress?(e: GestureResponderEvent): void;
  background?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<Props> = ({
  iconButtonRadius = 30,
  children,
  onPress = () => null,
  background,
  containerStyle,
}) => {
  const btnStyles = [
    styles.btn,
    {
      height: iconButtonRadius,
      width: iconButtonRadius,
      borderRadius: iconButtonRadius / 2,
    },
  ];

  return (
    <View style={[btnStyles, { backgroundColor: background }]}>
      <TouchableNativeFeedback
        onPress={onPress}
        style={[btnStyles, containerStyle]}
        background={{
          color: Colors.txt.warn,
          radius: iconButtonRadius / 2,
          type: "RippleAndroid",
        }}>
        {children}
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
