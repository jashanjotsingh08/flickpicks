import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <Searchbar
      placeholder="Search"
      value={value}
      onChangeText={onChangeText}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
  }
});

export default SearchBar;