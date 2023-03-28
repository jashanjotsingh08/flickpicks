import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import { IMAGE_URL } from '../../utils/api/movieService';
import { useTheme } from 'react-native-paper';

const MovieSection = ({ title, movies }) => {
  const { glassmorphism } = useTheme();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal='true' style={styles.scrollView}>
        {movies &&
          movies.map((movie) => (
            <TouchableOpacity key={movie.id} style={{ ...glassmorphism, ...styles.moviePosterContainer }}>
              <Image style={styles.moviePoster} source={{ uri: `${IMAGE_URL}/original/${movie.poster_path}` }} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default MovieSection;

const styles = StyleSheet.create({
  section: {
    marginTop: 16,
    padding: 6
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  moviePosterContainer: {
    marginRight: 16,
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 16
  }
});
