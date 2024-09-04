import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";
import { BlurView } from "expo-blur";
import { User, Crown1, Profile2User, Message2 } from "iconsax-react-native";

const Mix = () => {
  return (
    // Layer Blur messing
    <View
      style={{
        backgroundColor: Colors.BACKGROUND_4,
        borderRadius: 24,
        flexDirection: "column",
        width: 115,
      }}
    >
      <View style={{ flexDirection: "row-reverse", width: "100%" }}>
        <View style={{ position: "relative", top: -5 }}>
          <View style={{}}>
            <SvgXml xml={svgs[0].profile} style={{width:10,height:10}}/>
          </View>
          <View style={{ position: "absolute", right: 0, bottom: 0 }}>
            <SvgXml xml={svgs[0].smalCards} />
          </View>
        </View>
        <View
          style={{ position: "relative", flex: 1.5, marginLeft: 15, top: -6,width:'100%',zIndex:10000 }}
        >
          <View style={{}}>
            <SvgXml xml={svgs[0].logo} />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: 18,
              right: 15,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.almaraiBold,
                color: "#DC9F46",
                fontSize: 12.29,
                textShadowColor: "#FFCF0B",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              مخضرم
            </Text>
            <Text
              style={{
                fontFamily: fonts.almaraiBold,
                color: "#fff",
                fontSize: 9.43,
              }}
            >
              نابغة
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "98%",
          backgroundColor: Colors.BACKGROUND_4,
          borderRadius: 17,
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          flexDirection: "row",
          paddingVertical: 2,
          shadowColor: "#FFCF0B",
          shadowOpacity: 0.8,
          shadowRadius: 1,
          elevation: 5,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text
          style={{
            fontFamily: fonts.almaraiBold,
            color: "#fff",
            fontSize: 7.11,
          }}
        >
          Saad14
        </Text>
        <View
          style={{
            shadowColor: "#4D5666",
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            elevation: 3,
          }}
        >
          <Crown1 size="10" color="#FFCF0B" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Mix;
