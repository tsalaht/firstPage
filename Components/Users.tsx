import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { icons } from "../Views/icons";
import Mix from "./Mix";
import LinearButton from "./linearButton";

const Users = () => {
  const arr = React.useMemo<number[]>(() => new Array(10).fill(2), []);
  return (
    <View style={{width:'100%',flex:1}}>
<View style={styles.container}>
      <View style={styles.container2}>
        <View style={{marginTop:6}}>
        <LinearButton
                    text="الاصدقاء"
                    textStyles={{fontSize:12,fontFamily:fonts.almaraiBold}}
                    onPress={() => {}}
                    containerStyle={{
                      width: 81,
                      height: 26,
                    }}
                    linearStyle={{
                      width: 81,
                      height: 26,
                      paddingVertical:0
                    }}
                  />
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
          <SvgXml xml={icons[0].twoUser}/>
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
          <SvgXml xml={icons[0].oneUser}/>
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
          <SvgXml xml={icons[0].chat}/>
        </View>
      </View>

      <Mix />
    </View>
    <View style={{width:'100%',marginTop:24, overflow:'visible', position: "relative",marginBottom:80}}>
<ScrollView  showsVerticalScrollIndicator={false} style={{marginBottom:10, height:'100%' }}>
  <View style={{flexWrap :'wrap',flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingTop:10,
    gap:12}}>
      {arr.map((_, index) => (
        <Mix key={index}/>
      ))}

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
