import React from 'react';
import { StyleSheet, View,Text,ScrollView } from 'react-native';
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Crown1,Star1} from "iconsax-react-native";
import Scors from './Scors';
import RankRow2 from './RankRow2';
import { icons } from '../Views/icons';

const Leaderboard = () => {
    return (
        <View style={{flex:1}}>
            
            <View style={styles.container}>
<View style={styles.container2}>
<AnimatedCircularProgress
              size={75}
              width={10}
              fill={25}
              tintColor={Colors.SECONDARY_600}
              backgroundColor={Colors.BACKGROUND_3}
              rotation={360}
              duration={500}
            >
              {() => (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    columnGap: 8,
                    backgroundColor:Colors.BACKGROUND_4,
                    width:'100%',height:'100%'
                  }}
                >
                </View>
              )}
            </AnimatedCircularProgress>
            <View style={styles.texContainer}>
<Text style={{fontFamily:fonts.almaraiRegular,fontSize:12,color:'white'}}>
الأداء
</Text>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:16,color:'white'}}>
25%
</Text>
          
            </View>
</View>
<View style={styles.container2}>
<SvgXml xml={svgs[0].cup} />
            <View style={styles.texContainer}>
<Text style={{fontFamily:fonts.almaraiRegular,fontSize:12,color:'white'}}>
الترتيب
</Text>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:16,color:'white'}}>
17%
</Text>
          
            </View>
</View>
<View style={{position:'relative',flexDirection:'column'}}>
<SvgXml xml={svgs[0].gropCard} />
<View
        style={styles.shadow}
      >
        <Text
          style={{
            fontFamily: fonts.almaraiBold,
            color:Colors.DEFAULT_WHITE,
            fontSize: 7.11,
          }}
        >
          Saad14
        </Text>
        <View
          style={{
            shadowColor: Colors.BACKGROUND_5,
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
            </View>
            <View style={styles.container3}>
<Text     style={{
            fontFamily: fonts.almaraiBold,
            color: Colors.DEFAULT_WHITE,
            fontSize: 14,
          }}>
متصدرو الاسبوع
</Text>
<View style={styles.scorsContainer}>

          <Scors
          gradientColors={['#C2E8FD', '#67E0AC', '#138B57', '#C2E8FD']}
          name="Saad14"
          badgeIcon={svgs[0].badge}
          gropCardIcon={svgs[0].gropCard}
        />
          <Scors
          gradientColors={['#FFFCA8', '#FDB836', '#FDC966', '#F1DC83']}
          name="Saad14"
          badgeIcon={svgs[0].badge2}
          gropCardIcon={svgs[0].gropCard2}
        />
          <Scors
          gradientColors={['#C2E8FD', '#C2E8FD', '#909090', '#DDDDDD','#FFFFFF']}
          name="Saad14"
          badgeIcon={svgs[0].badge3}
          gropCardIcon={svgs[0].gropCard}
        />
</View>
            </View>
            <View style={styles.container1}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>نقاط الدوري</Text>
          <View style={styles.nameRankHeader}>
            <Text style={styles.headerText}>الاسم</Text>
            <Text style={styles.headerText}>الترتيب</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <ScrollView contentContainerStyle={styles.scrollContainer}   showsVerticalScrollIndicator={false}>
          <View style={styles.rankRow}>
            <View style={styles.pointsContainer}>
              <View style={styles.pointsTextContainer}>
                <Text style={styles.pointsText}>0</Text>
                <SvgXml xml={icons[0].startw}/>
              </View>
            </View>
            <View style={styles.nameRankContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Saad14</Text>
                <SvgXml xml={svgs[0].twoo} />
              </View>
              <View style={styles.verticalBar} />
              <Text style={styles.rankText}>2568</Text>
            </View>
          </View>
          {Array.from({ length: 8 }).map((_, index) => (
            <RankRow2 key={index} name={`Saad${index + 15}`} rank={String(index + 1)} photoSvg={svgs[0].twoo} />
          ))}
        </ScrollView>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:Colors.BACKGROUND_5,
        paddingHorizontal:16,
        paddingVertical:13,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:16,
        marginVertical:8
    },
    texContainer:{
        flexDirection:'column',
        gap:4
    },
    container2:{
 flexDirection:'row',
 alignItems:'center',
 gap:8
    },
    shadow:{
        width: "98%",
        backgroundColor: Colors.BACKGROUND_4,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        flexDirection: "row",
        paddingVertical: 2,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        position: "absolute",
        bottom: 0,
    },
    container3: {
      width: "100%",
      backgroundColor: Colors.BACKGROUND_5,
      // marginTop: 8,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: 'center',
      flexDirection:'column',
      paddingTop:8,
      paddingBottom:18,
      paddingHorizontal:32,
      gap:14
    },
    scorsContainer:{
      width: "100%",
      alignItems: "center",
      justifyContent: 'center',
      gap:17,
      flexDirection:'row',
    },
    scrollContainer: {
      paddingBottom: 16,
    },
    rankRow: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginBottom: 8,
      backgroundColor: Colors.BACKGROUND_5,
    },
    pointsContainer: {
      width: 85.5,
      borderRadius: 13.5,
      paddingVertical: 2,
      flexDirection: 'row-reverse',
      shadowColor: "black",
      shadowOpacity: 0.8,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      elevation: 6,
      backgroundColor: Colors.SECONDARY_700,
      paddingRight: 2,
    },
    pointsTextContainer: {
      flexDirection: 'row',
      gap: 0.4,
      alignItems: 'center',
    },
    pointsText: {
      color: 'white',
      fontFamily: fonts.almaraiRegular,
      fontSize: 11.5,
    },
    nameRankContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingRight: 8,
    },
    verticalBar: {
      width: 1,
      height: '100%',
      backgroundColor: 'white',
      marginHorizontal: 8,
    },
    nameText: {
      color: 'white',
      fontFamily: fonts.almaraiBold,
      fontSize: 13.76,
    },
    rankText: {
      color: 'white',
      fontFamily: fonts.almaraiRegular,
      fontSize: 11.5,
      width: 48,
      borderLeftWidth: 2,
      borderLeftColor: 'white',
      textAlign: 'right',
    },
    container1: {
      flex: 1,
      borderRadius: 16,
      backgroundColor: Colors.BACKGROUND_4,
      padding: 8,
      marginTop: 8,
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
      gap: 37,
    },
    headerTextCenter: {
      textAlign: 'center',
    },
    divider: {
      width: '100%',
      height: 2,
      backgroundColor: Colors.BACKGROUND_5,
      borderRadius: 8,
      marginVertical: 16,
    },
})

export default Leaderboard;
