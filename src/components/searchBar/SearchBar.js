import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (text) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <TextInput
            style={styles.input}
            placeholder="Search for movies"
            value={searchText}
            onChangeText={handleSearchTextChange}
            clearButtonMode="while-editing"
            autoFocus={false}
        />
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F2F2F2',
        height: 40,
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 16,
        marginVertical: 8,
    },
});