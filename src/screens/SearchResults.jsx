import React, { useState, useEffect } from 'react';
import { searchMovies } from '../utils/api/movieService';
import { View, ScrollView, StyleSheet } from 'react-native';
import Tile from '../components/tile/Tile';
import { Title } from 'react-native-paper';

const SearchResults = ({ searchQuery }) => {
  const [results, setResults] = useState([]);

  const handleSearch = async (key) => {
    try {
      const response = await searchMovies(key);
      if (response && response.results) {
        setResults([...response.results]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      const getData = setTimeout(() => {
        handleSearch(searchQuery);
      }, 1000);
      return () => clearTimeout(getData);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {results && results.length > 0 ? (
        results.map(
          ({ poster_path, title, id }) => poster_path && <Tile key={id} posterUrl={poster_path} title={title} />
        )
      ) : (
        <View style={styles.view}>
          <Title> Please enter a query to search</Title>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10px',
    paddingVertical: '10px',
  },
});

export default SearchResults;
