import React, { createContext, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyProfil from './Views/MyProfil';
import { useFonts } from "expo-font";
import Community from './Views/Community';
import Chat from './Views/Chat';
import HonorablePeople from './Views/HonorablePeople';
import Review from './Views/Review';
import Distribution from './Views/Distribution';
const FontContext = createContext(false);
import { Provider } from 'react-redux';
import { store } from './Store/store';

export const useFont = () => useContext(FontContext);

export default function App() {
  let [fontsLoaded] = useFonts({
    Almarai_Regular: require('./assets/fonts/Almarai/Almarai-Regular.ttf'),
    Almarai_Bold: require('./assets/fonts/Almarai/Almarai-Bold.ttf'),
    Almarai_Light: require('./assets/fonts/Almarai/Almarai-Light.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <FontContext.Provider value={fontsLoaded}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <HonorablePeople/> */}
          <MyProfil />
          {/* <Community/> */}
          {/* <Chat/> */}
          {/* <Review/> */}
          {/* <Distribution/> */}
        </View>
      </FontContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
