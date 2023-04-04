import axios from 'axios';

const API_KEY = 'b738f5cd86406d7fcf5ef487a119149e';

const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'http://image.tmdb.org/t/p';

const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
};

const axiosInstance = createAxiosInstance();

export const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await axiosInstance.get('/movie/popular');
  return response.data;
};

export const getLatestMovies = async () => {
  const response = await axiosInstance.get('/movie/latest');
  return response.data;
};

export const getTopRatedMovies = async () => {
  const response = await axiosInstance.get('/movie/top_rated');
  return response.data;
};

export const getNowPlayingMovies = async () => {
  const response = await axiosInstance.get('/movie/now_playing');
  return response.data;
};

export const getUpcomingMovies = async () => {
  const response = await axiosInstance.get('/movie/upcoming');
  return response.data;
};

export const getMoviePosterUrl = async (posterPath, size = 'original') => {
  return `${IMAGE_URL}/${size}/${posterPath}`;
};

export const getMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};
