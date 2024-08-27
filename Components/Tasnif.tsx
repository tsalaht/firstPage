import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import eagle from '../assets/Wine.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Star1 } from 'iconsax-react-native';

export default function Tasnif() {
  const [week, setWeek] = useState('الترتيب');
  const [year, setYear] = useState('أسبوعي');
  const progress = (10 / 58) * 100;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Pressable onPress={() => setYear('العام')}>
            <View
              style={[
                styles.itemContainer,
                year === 'العام' && styles.selectedItem,
              ]}
            >
              <Text style={[styles.text, year === 'العام' && styles.selectedText]}>
                العام
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setYear('شهري')}>
            <View
              style={[
                styles.itemContainer,
                year === 'شهري' && styles.selectedItem,
              ]}
            >
              <Text style={[styles.text, year === 'شهري' && styles.selectedText]}>
                شهري
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setYear('أسبوعي')}>
            <View
              style={[
                styles.itemContainer,
                year === 'أسبوعي' && styles.selectedItem,
              ]}
            >
              <Text style={[styles.text, year === 'أسبوعي' && styles.selectedText]}>
                أسبوعي
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginTop: week !== 'الترتيب' ? 40 : 0,
          }}
        >
          {week === 'الترتيب' ? (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginTop: week !== 'الترتيب' ? 40 : 0,
              }}
            >
              <View style={styles.container2}>
                <Image source={eagle} style={styles.image} resizeMode="cover" />
              </View>
              <Text style={{ color: 'white', fontFamily: 'Almarai_Regular', marginTop: 8 }}>
                الترتيب: 88424
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Almarai_Bold',
                  marginTop: 8,
                  position: 'absolute',
                  top: 65,
                  fontSize: 28,
                }}
              >
                17%
              </Text>
            </View>
          ) : (
            <AnimatedCircularProgress
              size={180}
              width={18}
              fill={progress}
              tintColor="#5493EF"
              backgroundColor="#262B33"
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
                  }}
                >
                       {/* Missing Shadow */}
                  <Star1 size="34" color="#DC9F46" />
                  <Text style={{ color: 'white', fontFamily: 'Almarai_Bold' }}>
                    النقاط
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontFamily: 'Almarai_Regular',
                    }}
                  >
                    10/58
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          )}
        </View>
      </View>

      <View style={styles.rowLarge}>
        <Pressable onPress={() => setWeek('الاداء')}>
          <View
            style={[
              styles.largeItemContainer,
              week === 'الاداء' && styles.selectedLargeItem,
            ]}
          >
            <Text
              style={[styles.text, week === 'الاداء' && styles.selectedLargeText]}
            >
              الاداء
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setWeek('الترتيب')}>
          <View
            style={[
              styles.largeItemContainer,
              week === 'الترتيب' && styles.selectedLargeItem,
            ]}
          >
            <Text
              style={[styles.text, week === 'الترتيب' && styles.selectedLargeText]}
            >
              الترتيب
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    backgroundColor: '#39404D',
    borderRadius: 16,
    height: '84%',
    paddingHorizontal: 8,
  },
  row: {
    width: '100%',
    backgroundColor: '#4D5666',
    padding: 8,
    zIndex: 8,
    marginTop: 6,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 8,
    width: 94,
    backgroundColor: '#39404D',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    borderColor: '#EFB054',
  },
  text: {
    color: 'white',
    fontFamily: 'Almarai_Regular',
  },
  selectedText: {
    color: '#EFB054',
  },
  rowLarge: {
    width: '100%',
    backgroundColor: '#4D5666',
    padding: 8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  largeItemContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 8,
    width: 152,
    backgroundColor: '#39404D',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedLargeItem: {
    borderColor: '#EFB054',
    backgroundColor: '#EFB054',
  },
  selectedLargeText: {
    color: '#fff',
  },
  container2: {
    width: 200,
    height: 200,
    marginTop: 18,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
