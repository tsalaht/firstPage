import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const StatItem = ({ number, icon }:any) => {
    return (
        <View style={styles.statItemContainer}>
          <Text style={styles.statItemText}>{number}</Text>
          {typeof icon === 'string' ? (
            <SvgXml xml={icon} width="24" height="24" />
          ) : (
            icon 
          )}
        </View>
      );
    };
const styles = StyleSheet.create({
  statItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#4D5666',
    borderRadius: 12,
    alignItems: 'center',
    gap: 2,
    width: 70,
    justifyContent: 'flex-end',
    elevation: 90,
    paddingVertical: 0,
    // paddingHorizontal: 8,
  },
  statItemText: {
    color: '#fff',
    fontFamily: 'Almarai_Regular',
  },
});

export default StatItem;
