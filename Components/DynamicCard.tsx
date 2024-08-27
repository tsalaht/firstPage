import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

export default function DynamicCard({ imageSource, title, isChosen, onToggle, active }:any) {
  const [chosen, setChosen] = useState(isChosen);

  const handleToggle = () => {
    if (active) {
      setChosen(!chosen);
      onToggle(!chosen);
    }
  };

  return (
    <View style={styles.card}>
      {!active && <View style={styles.overlay} />}
      <Image source={imageSource} />
      <Text style={styles.title}>{title}</Text>
           {/* Missing Shadow */}
      <Pressable onPress={handleToggle}>
        <View
          style={[
            styles.button,
            chosen ? styles.chosenButton : styles.notChosenButton,
          ]}
        >
          <Text style={styles.buttonText}>
            {chosen ? title : 'إلغاء الاختيار'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4D5666',
    borderRadius: 12.25,
    paddingVertical: 12.25,
    paddingHorizontal: 12.25,
    marginBottom: 12.25,
    position: 'relative',
  },
  title: {
    fontSize: 12.75,
    color: 'white',
    fontFamily: 'Almarai_Regular',
  },
  button: {
    paddingHorizontal: 6.25,
    borderRadius: 6,
    paddingVertical: 3.75,
    marginTop: 12.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chosenButton: {
    backgroundColor: '#FFAF36',
    paddingHorizontal: 17.25,
  },
  notChosenButton: {
    backgroundColor: '#5493EF',
  },
  buttonText: {
    fontSize: 12.75,
    color: 'white',
    fontFamily: 'Almarai_Regular',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#262b3350',
    zIndex: 500,
    width: '133%',
    height: '119%',
    top: 0,
    left: 0,
    borderRadius: 12.25,
  },
});
