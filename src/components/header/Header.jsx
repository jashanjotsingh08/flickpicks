import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import SearchBar from '../searchBar/SearchBar';

const Header = ({ searchQuery, setSearchQuery, navigationRef }) => {
  const handleSearchBarPress = () => {
    navigationRef.navigate('SearchResults');
  };
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={() => navigationRef.goBack()} />
      <TouchableOpacity onPress={handleSearchBarPress} style={styles.searchBar}>
        <SearchBar value={searchQuery} setSearchQuery={setSearchQuery} />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchBar: {
    flex: [1, 1, '100%'],
  },
});

export default Header;
