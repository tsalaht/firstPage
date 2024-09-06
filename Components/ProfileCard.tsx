import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { Crown1, Gift } from 'iconsax-react-native';
import { icons } from '../Views/icons';
import Colors from '../Colors';
interface ProfileCardProps {
  gradientColors?: string[];
  profileSvg: string;
  badgeSvg: string;
  smallCardSvg: string;
  name?: string;
  giftCount?: string;
}
export default function ProfileCard({
  gradientColors = ["#C2E8FD", "#67E0AC", "#138B57", "#C2E8FD"],
  profileSvg,
  badgeSvg,
  smallCardSvg,
  name = "Saad14",
  giftCount = "152 ألفاً",
}:ProfileCardProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.iconContainer}>
          <SvgXml xml={profileSvg} />
          <View style={{ position: "absolute", right: -10, bottom: -12 }}>
            <SvgXml xml={smallCardSvg} />
          </View>
          <View style={{ position: "absolute", right: -14, top: -12 }}>
            <SvgXml xml={badgeSvg} />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Crown1 size="12" color="#FFCF0B" />
      </View>
      <View style={styles.giftContainer}>
      <SvgXml xml={icons[0].giftr}/>
        <Text style={styles.giftText}>{giftCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  gradientBorder: {
    padding: 6,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.BACKGROUND_3,
    borderRadius: 100,
    position: 'relative',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  nameText: {
    color: 'white',
    fontFamily: 'Almarai_Regular',
    fontSize: 8.31,
  },
  giftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 9.52,
    paddingVertical: 3.81,
    backgroundColor: 'white',
    borderRadius: 11.43,
  },
  giftText: {
    color: 'black',
    fontFamily: 'Almarai_Regular',
    fontSize: 8.31,
  },
});
