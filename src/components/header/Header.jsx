import React from 'react';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import SearchBar from '../searchBar/SearchBar';

const Header = ({ searchQuery, handleSearch, navigationRef }) => {
  const handleSearchBarPress = () => {
    console.log('pressed');
    navigationRef.navigate('SearchResults', searchQuery);
  };
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => console.log('back')} />
      <TouchableOpacity onPress={handleSearchBarPress}>
        <SearchBar value={searchQuery} onChangeText={handleSearch} />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

export default Header;
