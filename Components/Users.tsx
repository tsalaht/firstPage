import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";
import { BlurView } from "expo-blur";
import { User, Crown1, Profile2User, Message2 } from "iconsax-react-native";
import Mix from "./Mix";
const Users = () => {
  return (
    <View style={{width:'100%',flex:1}}>
<View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.button1}>
          <Text
            style={{
              fontFamily: fonts.almaraiBold,
              color: "white",
              fontSize: 12,
            }}
          >
            الاصدقاء
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Text
            style={{
              fontFamily: fonts.almaraiRegular,
              color: "white",
              fontSize: 14,
            }}
          >
            0
          </Text>
          <Profile2User size="16" color="#DC9F46" />
        </View>
        <View style={styles.iconContainer}>
          <Text
            style={{
              fontFamily: fonts.almaraiRegular,
              color: "white",
              fontSize: 14,
            }}
          >
            0
          </Text>
          <User size="16" color="#DC9F46" />
        </View>
        <View style={styles.iconContainer}>
          <Text
            style={{
              fontFamily: fonts.almaraiRegular,
              color: "white",
              fontSize: 14,
            }}
          >
            0
          </Text>
          <Message2 size="16" color="#DC9F46" />
        </View>
      </View>

      <Mix />
    </View>
    <View style={{width:'100%',marginTop:24, overflow:'visible', position: "relative",marginBottom:80}}>
<ScrollView  showsVerticalScrollIndicator={false} style={{marginBottom:10}}>
  <View style={{flexDirection:'column',gap:12}}>
  <View style={{flexDirection:'row',width:'100%',gap:8, position: "relative",overflow:'visible',paddingTop:8}}>
<Mix/>
<Mix/>
<Mix/>
  </View>
  <View style={{flexDirection:'row',width:'100%',gap:8, position: "relative",overflow:'visible'}}>
<Mix/>
<Mix/>
<Mix/>
  </View>
  <View style={{flexDirection:'row',width:'100%',gap:8, position: "relative",overflow:'visible'}}>
<Mix/>
<Mix/>
<Mix/>
  </View>
  <View style={{flexDirection:'row',width:'100%',gap:8, position: "relative",overflow:'visible'}}>
<Mix/>
<Mix/>
<Mix/>
  </View>
  <View style={{flexDirection:'row',width:'100%',gap:8, position: "relative",overflow:'visible'}}>
<Mix/>
<Mix/>
<Mix/>
  </View>



  </View>

</ScrollView>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_5,
    flexDirection: "row",
    padding: 8,
    zIndex: 800,
    marginTop: 8,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  container2: {
    backgroundColor: Colors.BACKGROUND_4,
    flexDirection: "row",
    gap: 12,
    padding: 8,
    borderRadius: 28,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#FFAF36",
    paddingHorizontal: 17.22,
    paddingVertical: 3.29,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6.25,
  },
});

export default Users;
