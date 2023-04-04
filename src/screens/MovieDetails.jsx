import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getMovieDetails, IMAGE_URL } from '../utils/api/movieService';

const MovieDetails = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await getMovieDetails(movieId);
      setMovie(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <View style={styles.container}>
          <ImageBackground
            style={styles.backgroundImage}
            source={{
              uri: `${IMAGE_URL}/w500/${movie.backdrop_path||movie.poster_path}`,
            }}
            blurRadius={10}
          >
            <View style={styles.card}>
                <ImageBackground
                  style={styles.posterImage}
                  source={{
                    uri: `${IMAGE_URL}/w300/${movie.poster_path}`,
                  }}
                >
                  {/* <View style={styles.overlay} /> */}
                </ImageBackground>
              <View style={styles.movieInfo}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '84%',
    height: undefined,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  movieInfo: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
  },
});
