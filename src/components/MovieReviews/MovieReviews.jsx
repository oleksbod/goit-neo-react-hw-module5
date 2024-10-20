import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/movie-api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.container}>
          {reviews.map((item) => (
            <li key={item.id} className={css.review}>
              <div className={css.author}>Author: {item.author}</div>

              <div>{item.content}</div>
            </li>
          ))}
        </ul>
      ) : !isLoading ? (
        "We don't have any reviews for this movie"
      ) : (
        ''
      )}
    </>
  );
};

export default MovieReviews;
