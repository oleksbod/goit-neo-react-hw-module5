import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/movie-api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={css.container}>
          {cast.map((item) => (
            <li key={item.id} className={css.person}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={`${item.name} image`}
              />

              <div className={css.name}>{item.name}</div>

              <div>Character: {item.character}</div>
            </li>
          ))}
        </ul>
      ) : !isLoading ? (
        "We don't have any cast for this movie"
      ) : (
        ''
      )}
    </>
  );
};

export default MovieCast;
