import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import MovieList from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/movie-api';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const movieTitle = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movieTitle) {
      return;
    }

    async function searchMoviesByTitle() {
      try {
        const data = await searchMovies(movieTitle);
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    searchMoviesByTitle();
  }, [movieTitle]);

  return (
    <div>
      <SearchBox />

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
