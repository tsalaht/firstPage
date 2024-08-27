import React, { createContext, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyProfil from './Views/MyProfil';
import { useFonts } from "expo-font";

// Create a context for the fonts
const FontContext = createContext(false);

export const useFont = () => useContext(FontContext);

export default function App() {
  let [fontsLoaded] = useFonts({
    Almarai_Regular: require('./assets/fonts/Almarai/Almarai-Regular.ttf'),
    Almarai_Bold: require('./assets/fonts/Almarai/Almarai-Bold.ttf'),
    Almarai_Light: require('./assets/fonts/Almarai/Almarai-Light.ttf'),
  });

  // Ensure fonts are loaded before rendering the app
  if (!fontsLoaded) {
    return null; // or you can return a loading spinner here
  }

  return (
    <FontContext.Provider value={fontsLoaded}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MyProfil />
      </View>
    </FontContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
