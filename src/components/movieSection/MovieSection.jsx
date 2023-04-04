import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import { IMAGE_URL } from '../../utils/api/movieService';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MovieSection = ({ title, movies, navigationRef }) => {
  const { glassmorphism } = useTheme();
  const navigation = useNavigation();


  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal='true' style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        {movies &&
          movies.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              style={{ ...glassmorphism, ...styles.moviePosterContainer }}
              onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })}
            >
              <Image style={styles.moviePoster} source={{ uri: `${IMAGE_URL}/w154/${movie.poster_path}` }} />
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
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
    paddingVertical: 16,
  },
});
