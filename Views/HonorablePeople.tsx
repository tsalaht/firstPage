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
    Star1,
    Crown1,
    Gift,
    Diamonds

  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
import HonorablePersonRow from "../Components/HonorablePersonRow";
  import { svgs } from "./svg";
  import RankRow3 from "../Components/RankRow3";

  
  export default function HonorablePeople() {
    const people = [
      {
        name: "Saad14",
        giftValue: 400,
        giftCount: 45,
        svgIcon: svgs[0].twoo,
      },
      {
        name: "Saad14",
        giftValue: 400,
        giftCount: 45,
        svgIcon: svgs[0].twoo,
      },
      {
        name: "Saad14",
        giftValue: 400,
        giftCount: 45,
        svgIcon: svgs[0].twoo,
      },
      {
        name: "Saad14",
        giftValue: 400,
        giftCount: 45,
        svgIcon: svgs[0].twoo,
      },
    ];
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

      container1: {
        borderRadius: 16,
        backgroundColor: Colors.BACKGROUND_5,
        padding: 8,
        marginTop: 8,
        paddingHorizontal:8
      },
      container3: {
        borderRadius: 16,
        backgroundColor: Colors.BACKGROUND_4,
        padding: 8,
        marginTop: 8,
        paddingHorizontal:8,
        flex:1
      },
      headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      headerText: {
        color: 'white',
        fontFamily: fonts.almaraiRegular,
        fontSize: 13.76,
      },
      nameRankHeader: {
        flexDirection: 'row',
        gap:37
      },
      headerTextCenter: {
        textAlign: 'center',
      },
      divider: {
        width: '100%',
        height: 2,
        backgroundColor: Colors.BACKGROUND_5,
        borderRadius: 8,
        marginVertical: 8,
      },
      scrollContainer: {
        paddingBottom: 16,

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
    const [selectedMonth, setSelectedMonth] = useState("خلال 7 أيام");
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
                <Text style={shadow.text}>قائمة الكرام</Text>
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
          <View style={{paddingHorizontal:16,width:'100%',flex:1}}>
          <View style={shadow.container1}>
            <View style={{width:'100%',alignItems:'center',justifyContent:'center',marginBottom:16}}>
            <Text style={{fontFamily:fonts.almaraiBold,color:'white',fontSize:14}}> اخر الهدايا </Text>
            </View>
        <View style={shadow.headerContainer}>
          <View style={{flexDirection:'row' ,alignItems:'center' ,gap:28}}>

          <Text style={shadow.headerText}>قيمة الهدية </Text>
          <Text style={shadow.headerText}> عدد الهدايا </Text>
          </View>
          <View style={shadow.nameRankHeader}>
            <Text style={shadow.headerText}>الاسم</Text>
          </View>
        </View>
        <View style={shadow.divider}></View>
        
        {people.map((person, index) => (
                <HonorablePersonRow
                  key={index}
                  name={person.name}
                  giftValue={person.giftValue}
                  giftCount={person.giftCount}
                  svgIcon={person.svgIcon}
                />
              ))}
      </View>
      <View style={shadow.container3}>
        <View style={shadow.headerContainer}>
          <Text style={shadow.headerText}> قيمة الهدايا</Text>
          <View style={shadow.nameRankHeader}>
            <Text style={shadow.headerText}>الاسم</Text>
            <Text style={shadow.headerText}>الترتيب</Text>
          </View>
        </View>
        <View style={shadow.divider}></View>
        <ScrollView contentContainerStyle={shadow.scrollContainer}   showsVerticalScrollIndicator={false}>
     {Array.from({ length: 8 }).map((_, index) => (
       <RankRow3 key={index} name={`Saad${index + 15}`} rank={index + 1} photoSvg={svgs[0].twoo} />
     ))}
   </ScrollView>

      </View>

      <View style={{ paddingHorizontal: 1, width: "100%", marginBottom:12}}>
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
            
              <Pressable onPress={() => setSelectedMonth("الترتيب العام")}>
                <View
                  style={[
                    shadow.tab2,
                    selectedMonth === "الترتيب العام" && shadow.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      shadow.tabText,
                      selectedMonth === "الترتيب العام" && shadow.selectedTabText,
                    ]}
                  >
         الترتيب العام
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSelectedMonth("خلال 7 أيام")}>
                <View
                  style={[
                    shadow.tab2,
                    selectedMonth === "خلال 7 أيام" && shadow.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      shadow.tabText,
                      selectedMonth === "خلال 7 أيام" && shadow.selectedTabText,
                    ]}
                  >
           خلال 7 أيام
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          </View>
      
        </ImageBackground>
      </View>
    );
  }
  
