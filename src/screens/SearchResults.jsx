import React, { useState, useEffect } from 'react';
import { searchMovies } from '../utils/api/movieService';
import { List } from 'react-native-paper';

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
    }
  }, [searchQuery]);

  return (
    <List.Section>
      {results && results.length > 0 && results.map((item) => <List.Item title={item.title} key={item.id}></List.Item>)}
    </List.Section>
  );
};

export default SearchResults;
