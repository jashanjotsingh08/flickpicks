import { ScrollView, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MovieSection from '../components/movieSection/MovieSection';
import {
  getLatestMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../utils/api/movieService';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(async () => {
    setIsLoading(true);
    getLatestMovies()
      .then((data) => setLatestMovies([...data.results]))
      .catch((err) => {
        console.error(err);
      });
    getPopularMovies()
      .then((data) => setPopularMovies([...data.results]))
      .catch((err) => {
        console.error(err);
      });
    getNowPlayingMovies()
      .then((data) => setNowPlayingMovies([...data.results]))
      .catch((err) => {
        console.error(err);
      });
    getTopRatedMovies()
      .then((data) => setTopRatedMovies([...data.results]))
      .catch((err) => {
        console.error(err);
      });
    getUpcomingMovies()
      .then((data) => setUpcomingMovies([...data.results]))
      .catch((err) => {
        console.error(err);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <ScrollView style={styles.scrollView}>
          {latestMovies && latestMovies.length > 0 && <MovieSection title='Latest' movies={latestMovies} />}
          {popularMovies && <MovieSection title='Popular' movies={popularMovies} />}
          {topRatedMovies && <MovieSection title='Top Rated' movies={topRatedMovies} />}
          {nowPlayingMovies && <MovieSection title='Now Playing' movies={nowPlayingMovies} />}
          {upcomingMovies && <MovieSection title='Upcoming' movies={upcomingMovies} />}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // paddingHorizontal: 6,
    // paddingVertical: 6,
  },
});

export default HomeScreen;
