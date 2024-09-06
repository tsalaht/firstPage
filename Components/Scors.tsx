import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Crown1 } from "iconsax-react-native";
import Colors from "../Colors";
import fonts from "../fonts";

type ScorsProps = {
  gradientColors: string[]; 
  name: string;
  badgeIcon: string;
  gropCardIcon: string; 
};
const Scors = ({ gradientColors, name, badgeIcon, gropCardIcon }:ScorsProps) => {
  return (
    <LinearGradient colors={gradientColors} style={styles.gradientBorder}>
      <View style={styles.innerView}>
        <View style={{ position: 'absolute', right: -14, top: -14 }}>
          <SvgXml xml={badgeIcon} />
        </View>
        <View style={{ position: 'relative', flexDirection: 'column' }}>
          <SvgXml xml={gropCardIcon} />
          <View style={styles.shadow}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.crownContainer}>
              <Crown1 size="10" color="#FFCF0B" />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2.25,
    borderRadius: 21.24,
  },
  innerView: {
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 21.24,
    overflow: 'visible',
    padding: 12.25,
    position: 'relative',
  },
  shadow: {
    width: '98%',
    backgroundColor: '#36393F',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    flexDirection: 'row',
    paddingVertical: 2,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  nameText: {
    fontFamily: fonts.almaraiBold,
    color: Colors.DEFAULT_WHITE,
    fontSize: 7.11,
  },
  crownContainer: {
    shadowColor: Colors.BACKGROUND_5,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
  },
});

export default Scors;
