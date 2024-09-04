import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import { ArrowRight2, Gift, Diamonds } from "iconsax-react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";

export default function Distribution() {
  const [giftCount, setGiftCount] = useState("");
  const [giftMessage, setGiftMessage] = useState("");

  const shadow = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: "#404040",
      borderRadius: 8,
      shadowColor: "#0000004D",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color: "#EFB054",
      fontFamily: fonts.almaraiRegular,
    },
    blurContainer: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#262b3384",
      alignItems: "center",
      justifyContent: "center",
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
    },
    container1: {
      marginTop: 18,
      borderRadius: 16,
      backgroundColor: Colors.BACKGROUND_5,
      flexDirection: "column",
      padding: 16,
      gap: 16,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    giftsContainer: {
      flexDirection: "column",
      gap: 16,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    horizontalGifts: {
      flexDirection: "row-reverse",
      gap: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    textGift: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    giftInput: {
      width: 198,
      paddingVertical: 4,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.BACKGROUND_4,
    },
    textAriaContainer: {
      flexDirection: "column",
      gap: 4,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    textAria: {
      width: "100%",
      borderRadius: 12,
      backgroundColor: Colors.BACKGROUND_4,
      paddingVertical: 12,
      paddingHorizontal: 12,
      height: 100,
    },
    InputAriaTexts: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row-reverse",
    },
    lastContainer: {
      backgroundColor: Colors.BACKGROUND_4,
      borderRadius: 12,
      padding: 12,
      gap: 8,
      width: "100%",
    },
    noActiveButtone: {
      width: "100%",
      paddingVertical: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#A28355",
      borderRadius: 8,
    },
    activeButtone: {
      width: "100%",
      paddingVertical: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFAF36",
      borderRadius: 8,
      shadowColor: "#FFCF0B",
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 5,
    },
  });

  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/plagin.png")}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.1,
        }}
      >
        <BlurView intensity={5} tint="dark" style={shadow.blurContainer}>
          <View style={{ width: "100%", flexDirection: "column" }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                paddingVertical: 36,
                zIndex: 7,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 32,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#4D5666",
                  borderRadius: 16,
                  alignItems: "center",
                  padding: 12,
                  gap: 4,
                }}
              >
                <Diamonds size="16" color="#B9F2FF" variant="Bold" />
                <Text
                  style={{ color: "#fff", fontFamily: fonts.almaraiRegular }}
                >
                  1478
                </Text>
              </View>
              <View style={shadow.container}>
                <Text style={shadow.text}>توزيع الهدايا</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#4D5666",
                  borderRadius: 16,
                  alignItems: "center",
                  paddingVertical: 12,
                  gap: 4,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{ color: "#262B33", fontFamily: fonts.almaraiRegular }}
                >
                  عودة
                </Text>
                <ArrowRight2 size={16} color="#262B33" />
              </View>
            </View>
          </View>
        </BlurView>
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
          <View style={shadow.container1}>
            <Text
              style={{
                fontFamily: fonts.almaraiBold,
                fontSize: 16,
                color: "white",
              }}
            >
              توزيع الهدايا
            </Text>
            <View style={shadow.giftsContainer}>
              <View style={shadow.horizontalGifts}>
                <View style={shadow.textGift}>
                  <Text
                    style={{
                      fontFamily: fonts.almaraiBold,
                      fontSize: 14,
                      color: "white",
                    }}
                  >
                    عدد الهدايا
                  </Text>
                  <Gift size="16" color="#EB6F70" />
                </View>
                <View style={shadow.giftInput}>
                  <TextInput
                    placeholder="25"
                    placeholderTextColor={"#616671"}
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                    }}
                    value={giftCount}
                    onChangeText={(text) => setGiftCount(text)}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={shadow.horizontalGifts}>
                <View style={shadow.textGift}>
                  <Text
                    style={{
                      fontFamily: fonts.almaraiBold,
                      fontSize: 14,
                      color: "white",
                    }}
                  >
                    قيمة الهدية
                  </Text>
                  <Diamonds size="16" color="#B9F2FF" variant="Bold" />
                </View>
                <View style={shadow.giftInput}>
                  <TextInput
                    placeholder="400"
                    placeholderTextColor={"#616671"}
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                    }}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <View style={shadow.textAriaContainer}>
              <View style={shadow.textAria}>
                <TextInput
                  placeholder="رسالة الأهداء"
                  placeholderTextColor={"#616671"}
                  style={{
                    color: "white",
                    fontFamily: fonts.almaraiRegular,
                    textAlign: "right",
                  }}
                  maxLength={150}
                  value={giftMessage}
                  onChangeText={(text) => setGiftMessage(text)}
                  multiline
                />
              </View>
              <View style={shadow.InputAriaTexts}>
                <Text
                  style={{
                    fontFamily: fonts.almaraiBold,
                    fontSize: 10,
                    color: "white",
                  }}
                >
                  ** هذه الرسالة ستظهر لمستلم الهدية
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.almaraiBold,
                    fontSize: 10,
                    color: "white",
                  }}
                >
                  ({giftMessage.length}/150)
                </Text>
              </View>
            </View>

            <View
              style={
                giftCount === "" ? shadow.noActiveButtone : shadow.activeButtone
              }
            >
              <Text
                style={{
                  fontFamily: fonts.almaraiBold,
                  fontSize: 12,
                  color: giftCount === "" ? "#A4A09D" : "white",
                }}
              >
                انشاء
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
