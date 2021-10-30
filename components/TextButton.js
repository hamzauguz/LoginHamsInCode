import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { FONTS, COLORS } from "../constants";

const TextButton = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
  source,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.red,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
      source={source}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
