import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/movie-api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
