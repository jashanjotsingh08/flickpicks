import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { searchMovies } from '../utils/api/movieService';
import { List } from 'react-native-paper';

const SearchResults = ({ query }) => {
  let [results, setResults] = useState([]);
  if (query) {
    handleSearch(query);
  }

  const handleSearch = (key) => {
    try {
      const response = searchMovies(key);
      if (response) {
        console.log(response);
        setResults([response.results]);
      }
    } catch (error) {}
  };
  return (
    <List.Section>
      {results.length > 0 &&
        results.map((item) => {
          <List.Item title={item.title}></List.Item>;
        })}
    </List.Section>
  );
};

export default SearchResults;
