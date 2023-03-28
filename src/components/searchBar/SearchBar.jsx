import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ value, setSearchQuery }) => {
  return (
    <Searchbar
      placeholder='Search'
      value={value}
      onChangeText={text => setSearchQuery(text)}
      style={styles.searchBar}
      onClearIconPress={() => setSearchQuery('')}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {},
});

export default SearchBar;
