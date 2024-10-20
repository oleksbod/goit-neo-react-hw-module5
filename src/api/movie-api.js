import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmZiYWU4NDRmYWNiNTdjYmVlZWE4ZjI4NGM0MmQyZCIsIm5iZiI6MTcyOTM1NDQwMy43OTM3NzksInN1YiI6IjY3MTNiZjliOTlmMjJmMzI2YWFkMTM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vauS0O1tAlV2XhTKHRyL3R-42gdHio074hs-tV9pwLw'
  }
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?language=en-US`, options);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits?language=en-US`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews?language=en-US`, options);
  return response.data.results;
};

export const searchMovies = async (name) => {
  const response = await axios.get(
    `/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};
