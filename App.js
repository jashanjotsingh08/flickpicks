import * as React from "react";
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import PaperThemeProvider from './src/utils/styles/theme';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Header from "./src/components/header/Header";
import SearchResults from "./src/screens/SearchResults";
import { useTheme } from 'react-native-paper';
import MovieDetails from "./src/screens/MovieDetails";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigationRef = useNavigationContainerRef();
  const Stack = createStackNavigator();
  const { glassmorphism } = useTheme();

  const navigatorScreenOptions = {
    presentation: 'card',
    cardOverlayEnabled: true,
    cardShadowEnabled: true,
    cardStyle: {
      glassmorphism
    },
    animationEnabled: true,
    animationTypeForReplace: 'pop',
    gestureEnabled: true
  }

  return (
    <PaperThemeProvider themeType={'light'}>
      <NavigationContainer ref={navigationRef} onReady={() => console.log('Navigation container is ready')}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigationRef={navigationRef} />
        <Stack.Navigator initialRouteName="Home" screenOptions={navigatorScreenOptions} navigationRef={navigationRef}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} navigationRef={navigationRef}/>
          <Stack.Screen name="SearchResults">
            {() => <SearchResults searchQuery={searchQuery} navigationRef={navigationRef}/>}
          </Stack.Screen>
          <Stack.Screen name="MovieDetails" component={MovieDetails} navigationRef={navigationRef}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
