import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import { ArrowRight2, Gift, Diamonds } from "iconsax-react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";

export default function Review() {
  const [giftCount, setGiftCount] = useState("");
  const [giftMessage, setGiftMessage] = useState("");

  const custome = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      height: "100%",
      paddingHorizontal: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    container1: {
      width: "100%",
      backgroundColor: Colors.BACKGROUND_5,
      borderRadius: 16,
      padding: 8,
      flexDirection: "column",
      gap: 8,
    },
    insid1: {
      backgroundColor: Colors.BACKGROUND_4,
      borderRadius: 28,
      paddingHorizontal: 12,
      paddingVertical: 8,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    container2: {
        width: "100%",
        backgroundColor: Colors.BACKGROUND_5,
        borderRadius: 16,
        padding: 8,
      },
      row1:{
        backgroundColor:Colors.BACKGROUND_4,
        borderTopEndRadius: 16,
      },textCol:{
        fontFamily: fonts.almaraiBold,
        color: "#9C9FA6",
        fontSize: 10,
      },
      textCol2:{
        fontFamily: fonts.almaraiBold,
        color: "#fff",
        fontSize: 10,
      },
      container3:{
        backgroundColor:'#436165',
        borderRadius: 16,
        padding: 8,
        flexDirection:'row-reverse',
        alignItems: "center",
        justifyContent: 'space-between',
        gap:22.5

      },
      button:{
width:'100%',
backgroundColor:Colors.BACKGROUND_5,
paddingVertical:16,     borderRadius: 8,   alignItems: "center",
justifyContent: "center",
      }
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
        <View style={custome.container}>
            <View style={{flexDirection:'column',gap:16,width:'100%'}}>
            <View style={custome.container1}>
            <View style={custome.insid1}>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text
                  style={{
                    fontFamily: fonts.almaraiRegular,
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  فريقنا
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.almaraiRegular,
                    color: "#9C9FA6",
                    fontSize: 14,
                  }}
                >
                  المشتري أو المديل:
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text
                  style={{
                    fontFamily: fonts.almaraiRegular,
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  حكم
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.almaraiRegular,
                    color: "#9C9FA6",
                    fontSize: 14,
                  }}
                >
                  اللعبة:
                </Text>
              </View>
            </View>
            <View style={custome.insid1}>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text
                    style={{
                      fontFamily: fonts.almaraiRegular,
                      color: "#47B881",
                      fontSize: 14,
                    }}
                  >
                    ربحانة
                  </Text>
                  <Text
                    style={{
                      fontFamily: fonts.almaraiRegular,
                      color: "#9C9FA6",
                      fontSize: 14,
                    }}
                  >
                    نتيجة الشراء:
                  </Text>
                </View>
              </View>
            </View>
          </View>
<View style={custome.container2}>
    <View style={{width:'100%',flexDirection:'row-reverse'}}>
    <View style={{flexDirection:'column',gap:16,paddingTop:4,flex:1,paddingLeft:16}} >
<Text style={custome.textCol}>
             النشرة
    </Text>
    <Text style={custome.textCol}>
    الأكلات
    </Text>
    <Text style={custome.textCol}>
    الأرض
    </Text>
    <Text style={custome.textCol}>
    المشاريع
    </Text>
</View>
<View style={{flexDirection:'column',gap:16,backgroundColor:Colors.BACKGROUND_4,paddingTop:4,paddingHorizontal:27.5, borderTopEndRadius:28,alignItems:'center',height:228}} >
<Text style={custome.textCol2}>
الفريق 1
    </Text>
    <Text style={custome.textCol2}>
    59
    </Text>
    <Text style={custome.textCol2}>
 
    </Text>
    <Text style={custome.textCol2}>
    100
    </Text>
</View>
<View style={{flexDirection:'column',gap:16,backgroundColor:Colors.BACKGROUND_4,paddingTop:4,paddingHorizontal:27.5, borderTopStartRadius:28,alignItems:'center',height:228,marginRight:0.5}} >
<Text style={custome.textCol2}>
الفريق2
    </Text>
    <Text style={custome.textCol2}>
    93
    </Text>
    <Text style={custome.textCol2}>
    10
    </Text>
    <Text style={custome.textCol2}>

    </Text>
</View>
    </View>
<View style={{width:'100%',flexDirection:'row-reverse',marginTop:0.5,borderTopWidth:0.5,borderTopColor:Colors.BACKGROUND_4}}>
    <View style={{flex:1,paddingVertical:8}}>
    <Text style={custome.textCol}>
الابناط
</Text>
    </View>

<View style={{width:88,alignItems:'center',justifyContent:'center',backgroundColor:Colors.BACKGROUND_4,borderBottomEndRadius:8,paddingVertical:8}}>
<Text style={custome.textCol2}>
159
</Text>
</View>
<View style={{width:88,alignItems:'center',justifyContent:'center',backgroundColor:Colors.BACKGROUND_4,borderBottomStartRadius:8,marginRight:0.5,paddingVertical:8}}>
<Text style={custome.textCol2}>
10
</Text>
</View>
</View>
</View>
<View style={custome.container3}>
<Text style={{fontFamily:fonts.almaraiBold,color:'#0C9D61',fontSize:16,paddingRight:28}}>
النتيجة
</Text>
<View style={{flexDirection:'row',backgroundColor:Colors.BACKGROUND_4,borderRadius:8}}>
    <View style={{paddingHorizontal:38.5,paddingVertical:8}}>
    <Text style={{fontFamily:fonts.almaraiBold,color:'#fff',fontSize:16}}>
10
</Text>
    </View>
    <View style={{paddingHorizontal:38.5,borderLeftWidth:1,paddingVertical:8,borderLeftColor:Colors.BACKGROUND_5}}>
    <Text style={{fontFamily:fonts.almaraiBold,color:'#fff',fontSize:16}}>
16
</Text>
    </View>

</View>
</View>
<View style={custome.button}>
<Text style={{        fontFamily: fonts.almaraiBold,
        color: "#F2BE72",
        fontSize: 12,}}>
عودة
</Text>
</View>
            </View>
   
        </View>
      </ImageBackground>
    </View>
  );
}
