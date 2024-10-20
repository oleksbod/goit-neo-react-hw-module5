import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { BackLink } from '../../components/BackLink/BackLink';
import { fetchMovieDetails } from '../../api/movie-api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {!movie ? (
        <div>Loading...</div>
      ) : (
        <div>
          <BackLink to={backLinkRef.current}>Go back</BackLink>
          <section className={css.movieSection}>
            <div className={css.imageWrapper}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} image`}
              />
            </div>

            <div className={css.movieDetails}>
              <h2>{movie.title}</h2>

              <div>User Score: {movie.popularity}</div>

              <h3>Overview</h3>

              <div>{movie.overview}</div>

              <h4>Genres</h4>

              <div>{movie.genres.map((genre) => genre.name).join(', ')}</div>
            </div>
          </section>

          <section className={css.additionalSection}>
            <div>Additional information</div>

            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>

              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </section>

          <section>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </section>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
