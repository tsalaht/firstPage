import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { Crown1, Diamonds, Gift } from "iconsax-react-native";
import Colors from "../Colors";
import fonts from "../fonts";
export default function HonorablePersonRow({ name, photo, giftValue, giftCount, svgIcon }:any) {
  const styles = StyleSheet.create({
    rankRow: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 19,
      alignItems: 'center',
      paddingVertical: 4,
      marginBottom: 8,
      backgroundColor: Colors.BACKGROUND_4,
      paddingHorizontal: 4,
    },
    pointsContainer: {
      borderRadius: 13.5,
      paddingVertical: 5,
      flexDirection: 'row-reverse',
      backgroundColor: 'white',
      paddingHorizontal: 9.52,
    },
    pointsTextContainer: {
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
    },
    pointsText: {
      color: 'black',
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
    },
    nameText: {
      color: 'white',
      fontFamily: fonts.almaraiBold,
      fontSize: 13.76,
    },
  });

  return (
    <View style={styles.rankRow}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 42 }}>
        <View style={styles.pointsContainer}>
          <View style={styles.pointsTextContainer}>
            <Diamonds size="14" color="#42C8E7" variant="Bold" />
            <Text style={styles.pointsText}>{giftValue}</Text>
          </View>
        </View>
        <View style={styles.pointsContainer}>
          <View style={styles.pointsTextContainer}>
            <Gift size="12" color="#EC2D30" />
            <Text style={styles.pointsText}>{giftCount}</Text>
          </View>
        </View>
      </View>
      <View style={styles.nameRankContainer}>
        <View style={styles.nameContainer}>
          <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            <Text style={styles.nameText}>{name}</Text>
            <Crown1 size="16" color="#FFCF0B" />
          </View>
          <SvgXml xml={svgIcon} />
        </View>
      </View>
    </View>
  );
}
