import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
import { Star1 } from "iconsax-react-native";
import RankRow from './RankRow';
import { icons } from '../Views/icons';

const Champions = () => {
  const [type, setType] = useState("البلاتينية");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.tabContainer}>
        {["البرونزية", "الفضية", "الذهبية", "البلاتينية"].map((item) => (
          <Pressable key={item} onPress={() => setType(item)}>
            <View style={[styles.tab, type === item && styles.selectedTab]}>
              <Text
                style={[
                  styles.tabText,
                  type === item && styles.selectedTabText,
                ]}
              >
                {item}
              </Text>
            </View>
          </Pressable>
        ))}
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
                <SvgXml xml={icons[0].staro}/>
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
            <RankRow key={index} name={`Saad${index + 15}`} rank={index + 1} photoSvg={svgs[0].twoo} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,

  },
  tabContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_4,
    padding: 8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 86,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: Colors.BACKGROUND_5,
  },
  tabText: {
    color: "white",
    fontFamily: "Almarai_Regular",
  },
  selectedTabText: {
    color: Colors.SECONDARY_400,
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
    backgroundColor: Colors.BACKGROUND_5,
    paddingRight: 4,
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

});

export default Champions;
