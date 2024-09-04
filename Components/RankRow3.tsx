import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { G, SvgXml } from "react-native-svg";
import { Star1,Gift } from "iconsax-react-native";
import fonts from "../fonts";
import Colors from "../Colors";

const RankRow3 = ({ name, rank, photoSvg }:any) => {
  return (
    <View style={styles.rankRow}>
      <View style={styles.pointsContainer}>
        <View style={{ flexDirection: 'row', gap:4, alignItems: 'center' }}>
          <Gift size="14" color="#EC2D30" />
          <Text style={{ color: 'black', fontFamily: fonts.almaraiRegular, fontSize: 11.5 }}>
          152 ألفاً
          </Text>
        </View>
      </View>
      <View style={styles.nameRankContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>
            {name}
          </Text>
          <SvgXml xml={photoSvg} />
        </View>
        <View style={styles.verticalBar} />
        <Text style={styles.rankText}>
          {rank}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rankRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  pointsContainer: {
    width: 80.5,
    borderRadius: 13.5,
    paddingVertical: 5,
    flexDirection: 'row-reverse',
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
    backgroundColor: 'white',
    paddingHorizontal:10.47
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

export default RankRow3;