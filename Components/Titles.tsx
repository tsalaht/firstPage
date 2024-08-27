import React from 'react';
import { View, Text, Image } from 'react-native';

const Titles = ({ imageSource, title }:any) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#4D5666',
        borderRadius: 12.25,
        paddingVertical: 12.25,
        paddingHorizontal: 12.25,
        marginBottom:12.25
      }}
    >
      <Image source={imageSource} />
      <Text
        style={{
          fontSize: 12.75,
          color: 'white',
          fontFamily: 'Almarai_Regular',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Titles;
