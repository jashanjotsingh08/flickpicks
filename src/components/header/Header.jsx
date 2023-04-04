import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import SearchBar from '../searchBar/SearchBar';
import { useTheme } from 'react-native-paper';

const Header = ({ searchQuery, setSearchQuery, navigationRef }) => {
  const { glassmorphism, colors } = useTheme();

  const handleSearchBarPress = () => {
    navigationRef.navigate('SearchResults');
  };
  return (
    <Appbar.Header style={{ ...glassmorphism, ...styles.header}}>
      <TouchableOpacity onPress={handleSearchBarPress} style={styles.searchBar} activeOpacity={1}>
        <SearchBar value={searchQuery} setSearchQuery={setSearchQuery} handleSearchBarPress={handleSearchBarPress}/>
      </TouchableOpacity>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 50,
  },
  searchBar: {
    flex: [1, 1, '100%'],
  },
});

export default Header;
