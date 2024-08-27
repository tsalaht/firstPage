import { View, Text, ImageBackground, StyleSheet, Image, Pressable,TextInput } from 'react-native';
import styles  from './Styles/Index';

import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import eagl from '../assets/Ellipse 1.png';
import { Edit, ArrowRight2 } from 'iconsax-react-native';
import { svgs } from './svg';
import StatItem from '../Components/StatItem';
import Tasnif from '../Components/Tasnif';
import Wins from '../Components/Wins';

export default function MyProfil() {
  const [type, setType] = useState('نبذة');
  const renderContent = () => {
    switch(type) {
      case 'نبذة':
        return (
          <TextInput 
          placeholder='اضغط هنا لإضافة نبذة عامة' 
          placeholderTextColor={'#FDF5E9'}
          style={{
            textAlign: 'center', 
            textAlignVertical: 'top', 
            paddingTop: 10, 
            fontFamily: 'Almarai_Light',
            color: 'white',
            backgroundColor: '#39404D',
            borderRadius: 16, 
            height: '82%',
          }}
        />
        );
      case 'التصنيف':
        return (
          <Tasnif/>
        );
      case 'الجوائز':
        return (
        <Wins/>
        );
      default:
        return null;
    }
  };

  const shadow = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#404040',
      borderRadius: 8,
      shadowColor: '#0000004D',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color: '#EFB054',
      fontFamily: 'Almarai_Regular',
    },
    blurContainer: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#262b3384',
      zIndex: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
    },
    blurContainer2: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#262b335e',
      zIndex: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
    },
  });

  return (
    <View style={styles.viewContainer}>
      <ImageBackground style={styles.background} source={require('../assets/plagin.png')}
      resizeMode='cover'
      imageStyle={{
        opacity:0.1
      }}>
        <BlurView intensity={5} tint="dark" style={shadow.blurContainer}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingVertical: 36,
              zIndex: 7,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 32,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#4D5666',
                borderRadius: 16,
                alignItems: 'center',
                padding: 12,
                gap: 4,
              }}
            >
              <Edit size={16} color="#262B33" />
              <Text style={{ color: '#262B33', fontFamily: 'Almarai_Regular' }}>تعديل</Text>
            </View>

            <View style={shadow.container}>
              <Text style={shadow.text}>الملف الشخصي</Text>
            </View>
{/* ******** */}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#4D5666',
                borderRadius: 16,
                alignItems: 'center',
                padding: 12,
                gap: 4,
              }}
            >
              <Text style={{ color: '#262B33', fontFamily: 'Almarai_Regular' }}>عودة</Text>
              <ArrowRight2 size={16} color="#262B33" />
            </View>
          </View>
        </BlurView>

        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <BlurView intensity={0} tint="dark" style={shadow.blurContainer2}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                zIndex: 7,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 32,
              }}
            >
              <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 16 }}>
                <View
                  style={{
                    backgroundColor: '#262B33',
                    paddingVertical: 6,
                    paddingHorizontal: 22,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    shadowOpacity: 0.8,
                    marginBottom: 16,
                    elevation: 10,
                  }}
                >
                  <Text style={{ color: '#fff', fontFamily: 'Almarai_Regular' }}>Saad14</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  {/* Missing Shadow */}
                  <View style={{ flexDirection: 'column', gap: 8 }}>
                    <StatItem number={2} icon={svgs[0].heart} />
                    <StatItem number={23} icon={svgs[0].win} />
                  </View>
                  <View style={{ flexDirection: 'column', position: 'relative' }}>
                    <Image source={eagl} style={{ marginLeft: 8 }} />
                    <View
                      style={{
                        paddingHorizontal: 38,
                        paddingVertical: 6,
                        backgroundColor: '#39404D',
                        borderRadius: 6,
                        marginTop: -10,
                        elevation: 100,
                        shadowOpacity: 0.8,
                      }}
                    >
                      <Text style={{ color: '#fff', fontFamily: 'Almarai_Regular' }}>مبتدئ</Text>
                    </View>
                  </View>
                       {/* Missing Shadow */}
                  <View style={{ flexDirection: 'column', gap: 8 }}>
                    <StatItem number={3111} icon={svgs[0].whiteStartr} />
                    <StatItem number={0} icon={svgs[0].orangeStart} />
                  </View>
                </View>
              </View>
            </View>
          </BlurView>

          <View style={{ width: '100%', backgroundColor: '#4D5666', padding: 8, zIndex: 8, marginTop: 8, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Pressable onPress={() => setType('الجوائز')}>
              <View style={[styl.tab, type === 'الجوائز' && styl.selectedTab]}>
                <Text style={[styl.tabText, type === 'الجوائز' && styl.selectedTabText]}>الجوائز</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType('التصنيف')}>
              <View style={[styl.tab, type === 'التصنيف' && styl.selectedTab]}>
                <Text style={[styl.tabText, type === 'التصنيف' && styl.selectedTabText]}>التصنيف</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType('نبذة')}>
              <View style={[styl.tab, type === 'نبذة' && styl.selectedTab]}>
                <Text style={[styl.tabText, type === 'نبذة' && styl.selectedTabText]}>نبذة</Text>
              </View>
            </Pressable>
          </View>

          <View style={{ marginTop: 8, borderRadius: 16, zIndex: 20, backgroundColor: '#4D5666', width: '100%', height: '57%', paddingTop: 8, paddingHorizontal: 8 }}>
          {renderContent()}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styl = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 8,
    width: 104,
    backgroundColor: '#39404D',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    borderColor: '#EFB054',
  },
  tabText: {
    color: 'white',
    fontFamily: 'Almarai_Regular',
  },
  selectedTabText: {
    color: '#EFB054',
  },
});
