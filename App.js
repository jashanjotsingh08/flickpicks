import * as React from "react";
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import PaperThemeProvider from './src/utils/styles/theme';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Header from "./src/components/header/Header";
import SearchResults from "./src/screens/SearchResults";


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigationRef = useNavigationContainerRef();
  const Stack = createStackNavigator();

  const handleSearch = async (query) => {
    setSearchQuery(query);

  };

  return (
    <PaperThemeProvider>
      <NavigationContainer ref={navigationRef} onReady={() => console.log('Navigation container is ready')}>
        <Header searchQuery={searchQuery} handleSearch={handleSearch} navigationRef={navigationRef} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchResults">
            {() => <SearchResults searchQuery={searchQuery} />}
          </Stack.Screen>
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
