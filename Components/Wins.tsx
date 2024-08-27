import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import eagle from '../assets/Wine.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Star1 } from 'iconsax-react-native';
import { SvgXml } from 'react-native-svg';
import { svgs } from '../Views/svg';
import sad from '../assets/frowning_face-removebg-preview.png'
import midel from '../assets/midle.png'
import midel2 from '../assets/midle2.png'
import Titles from './Titles';
import DynamicCard from './DynamicCard';
export default function Wins() {
  const [week, setWeek] = useState('الترتيب');
  const [year, setYear] = useState('أسبوعي');
  const progress = (10 / 58) * 100;
  const [type, setType] = useState('الجوائز');
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [activeCards, setActiveCards] = useState([true, true, false, true, false, false]); 
  const handleToggle = (index:any) => {
    setSelectedCard(index);
  };
  const handleActiveToggle = (index:any) => {
    setActiveCards(prevState => {
      const newActiveState = [...prevState];
      newActiveState[index] = !newActiveState[index]; 
      return newActiveState;
    });
  };
  const renderContent = () => {
    switch(type) {
      case 'الجوائز':
        return (
            <View style={{width:'100%',flexDirection:'column',height:'100%',alignItems:'center',}}>
            <Text   style={{
                            fontSize: 14,
                            color: 'white',
                            fontFamily: 'Almarai_Regular',
                            marginBottom:6
                            
                          }}>
      الألقاب المكتسبة: 2
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
          <View style={{width:'100%',height:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
          {cards.map((card, index) => (
                    <DynamicCard
                    key={card.id}
                    imageSource={card.image}
                    title={card.title}
                    isChosen={selectedCard === index}
                    onToggle={() => handleToggle(index)}
                    active={activeCards[index]}
                    onActiveToggle={() => handleActiveToggle(index)}
                  />
                    ))}
      
      
      <View>
          
      </View>
      
          </View>
      </ScrollView>
            </View> 
        );
      case 'الإنجازات':
        return (
            <View style={{width:'100%',flexDirection:'column',height:'100%',alignItems:'center',}}>
            <Text   style={{
                            fontSize: 14,
                            color: 'white',
                            fontFamily: 'Almarai_Regular',
                            marginBottom:6
                            
                          }}>
      الإنجازات المكتسبة: 23 
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
          <View style={{width:'100%',height:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
      
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      <Titles imageSource={midel} title="اربعمية" />
      
          </View>
      </ScrollView>
            </View> 
        );
      case 'الألقاب':
        return (
            <View style={{width:'100%',alignItems:'center',justifyContent:'center',height:'100%'}}>
            <Image source={sad}/>
        <Text   style={{
                              fontSize: 14,
                              color: 'white',
                              fontFamily: 'Almarai_Regular',
                            }}>
        لم تحصل على جوائز بعد!
        </Text>
              </View> 
        );
      default:
        return null;
    }
  };

  const cards = [
    { id: 1, image: midel2, title: 'مخضرم' },
    { id: 2, image: midel2, title: 'مخضرم' },
    { id: 3, image: midel2, title: 'مخضرم' },
    { id: 4, image: midel2, title: 'مخضرم' },
    { id: 5, image: midel2, title: 'مخضرم' },
    { id: 6, image: midel2, title: 'مخضرم' },
  ];

  return (
    <View>
      <View style={{...styles.container}}>
    
      {renderContent()}
    
    </View>


      <View style={{ width: '100%', backgroundColor: '#4D5666', padding: 8, zIndex: 8, marginTop: 8, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
         
            <Pressable onPress={() => setType('الألقاب')}>
              <View style={[styles.tab, type === 'الألقاب' && styles.selectedTab]}>
                <Text style={[styles.tabText, type === 'الألقاب' && styles.selectedTabText]}>الألقاب</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType('الإنجازات')}>
              <View style={[styles.tab, type === 'الإنجازات' && styles.selectedTab]}>
                <Text style={[styles.tabText, type === 'الإنجازات' && styles.selectedTabText]}>الإنجازات</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType('الجوائز')}>
              <View style={[styles.tab, type === 'الجوائز' && styles.selectedTab]}>
                <Text style={[styles.tabText, type === 'الجوائز' && styles.selectedTabText]}>الجوائز</Text>
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
    backgroundColor:'#EFB054'
  },
  tabText: {
    color: 'white',
    fontFamily: 'Almarai_Regular',
  },
  selectedTabText: {
    color: '#fff',
  },
});
