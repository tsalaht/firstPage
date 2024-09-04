import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import eagl from "../assets/Ellipse 1.png";
import {
  Profile2User,
  ArrowRight2,
  ShoppingCart,
  Home2,
  Cup,
  Message2,
  Key,
} from "iconsax-react-native";
import { SvgXml } from "react-native-svg";
import Users from "../Components/Users";
import { svgs } from "./svg";
import Champions from "../Components/Champions";
import Leaderboard from "../Components/Leaderboard";
import { setActiveComponent } from "../Store/navigationSlice";
import { useDispatch } from 'react-redux';

export default function Community() {
  const dispatch = useDispatch();
  const [type, setType] = useState("المتواجدون");
  const [selectedMonth, setSelectedMonth] = useState("الشهر الحالي");
  const [selectedWeek, setSelectedWeek] = useState<any>("الاسبوع الماضي");
  const renderContent = () => {
    switch (type) {
      case "المتواجدون":
        return <Users />;
      case "الدوريات":
        return <Champions />;
      case "المتصدرون":
        return <Leaderboard />;
      default:
        return null;
    }
  };
  const renderContent2 = () => {
    switch (type) {
      case "المتواجدون":
        return (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              flexDirection: "row",
            }}
          >
            <View style={styl.container1}>
              <Text
                style={{
                  color: "#9C9FA6",
                  fontFamily: fonts.almaraiRegular,
                  fontSize: 12,
                }}
              >
                لاعب متواجد هنا
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: fonts.almaraiBold,
                    fontSize: 15,
                  }}
                >
                  1500
                </Text>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 50,
                    backgroundColor: "#47B881",
                  }}
                ></View>
              </View>
            </View>
            <View style={styl.container2}>
              <Text
                style={{
                  color: "white",
                  fontFamily: fonts.almaraiRegular,
                  fontSize: 14,
                }}
              >
                الخادم 1
              </Text>
            </View>
          </View>
        );
      case "الدوريات":
        return (
          <View style={{ paddingHorizontal: 12, width: "100%" }}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#4D5666",
                padding: 8,
                zIndex: 8,
                marginTop: 8,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={() => setSelectedMonth("الشهر الحالي")}>
                <View
                  style={[
                    styl.tab2,
                    selectedMonth === "الشهر الحالي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedMonth === "الشهر الحالي" && styl.selectedTabText,
                    ]}
                  >
                    الشهر الحالي
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSelectedMonth("الشهر الماضي")}>
                <View
                  style={[
                    styl.tab2,
                    selectedMonth === "الشهر الماضي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedMonth === "الشهر الماضي" && styl.selectedTabText,
                    ]}
                  >
                    الشهر الماضي
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      case "المتصدرون":
        return (
          <View style={{ width: "100%", paddingHorizontal: 16 }}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#4D5666",
                padding: 8,
                zIndex: 8,
                marginTop: 8,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={() => setSelectedWeek("الترتيب العام")}>
                <View
                  style={[
                    styl.tab,
                    selectedWeek === "الترتيب العام" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedWeek === "الترتيب العام" && styl.selectedTabText,
                    ]}
                  >
                    المتصدرون
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSelectedWeek("الشهر الماضي")}>
                <View
                  style={[
                    styl.tab,
                    selectedWeek === "الشهر الماضي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedWeek === "الشهر الماضي" && styl.selectedTabText,
                    ]}
                  >
                    الشهر الماضي
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSelectedWeek("الاسبوع الماضي")}>
                <View
                  style={[
                    styl.tab,
                    selectedWeek === "الاسبوع الماضي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedWeek === "الاسبوع الماضي" && styl.selectedTabText,
                    ]}
                  >
                    الاسبوع الماضي
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  const shadow = StyleSheet.create({
    // inside shadow
    container: {
      padding: 16,
      backgroundColor: "#404040",
      borderRadius: 8,
      shadowColor: "#0000004D",
      marginLeft: 45,
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
    blurContainer2: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#262b3384",
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
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
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingVertical: 30,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 32,
            }}
          >
            <View></View>
            <View style={shadow.container}>
              <Text style={shadow.text}>المجتمع</Text>
            </View>

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
              <Text style={{ color: "#262B33", fontFamily: "Almarai_Regular" }}>
                عودة
              </Text>
              <ArrowRight2 size={16} color="#262B33" />
            </View>
          </View>
        </BlurView>

        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 8,
            flex: 1,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#4D5666",
              padding: 8,
              zIndex: 8,
              marginTop: 8,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => setType("المتصدرون")}>
              <View
                style={[styl.tab, type === "المتصدرون" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "المتصدرون" && styl.selectedTabText,
                  ]}
                >
                  المتصدرون
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("الدوريات")}>
              <View style={[styl.tab, type === "الدوريات" && styl.selectedTab]}>
                <Text
                  style={[
                    styl.tabText,
                    type === "الدوريات" && styl.selectedTabText,
                  ]}
                >
                  الدوريات
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("المتواجدون")}>
              <View
                style={[styl.tab, type === "المتواجدون" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "المتواجدون" && styl.selectedTabText,
                  ]}
                >
                  المتواجدون
                </Text>
              </View>
            </Pressable>
          </View>

          {renderContent()}
        </View>
        <BlurView
          intensity={5}
          tint="dark"
          style={{ ...shadow.blurContainer2 }}
        >
          <View style={{ width: "100%", paddingVertical: 12 }}>
            {renderContent2()}

            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 28,
                flexDirection: "row",
                marginTop: 16,
              }}
            >
              <Pressable  onPress={() => dispatch(setActiveComponent('Distribution'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <ShoppingCart size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    المتجر
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('Community'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Profile2User size="16" color="#EFB054" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    المجتمع
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('MyProfil'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Home2 size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    الرئيسية
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('HonorablePeople'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Cup size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    الدوريات
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('Chat'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Message2 size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    الدردشة
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styl = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 104,
    backgroundColor: "#39404D",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: "#EFB054",
  },
  tabText: {
    color: "white",
    fontFamily: "Almarai_Regular",
  },
  selectedTabText: {
    color: "#fff",
  },
  bottmRaduse: {
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  container1: {
    borderRadius: 28,
    paddingHorizontal: 48.5,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.BACKGROUND_4,
    flexDirection: "row",
  },
  container2: {
    borderRadius: 28,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_5,
  },
  iconsContainer: {
    padding: 12,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 16,
  },
  tab2: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 159.5,
    backgroundColor: "#39404D",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
