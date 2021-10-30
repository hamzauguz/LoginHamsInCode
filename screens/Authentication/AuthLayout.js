import React from "react";
import { View, Text, Image } from "react-native";

import { images, FONTS, SIZES, COLORS } from "../../constants";


const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        keyboardDismissMode="on-drag"
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App Icon */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{
              width: 200,
              height: 100,
            }}
          />
        </View>

        {/* Title & Subtitle */}
        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {/* Content / Children */}

        {children}
      </View>
    </View>
  );
};

export default AuthLayout;
