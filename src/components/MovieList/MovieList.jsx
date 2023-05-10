import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  console.log(movies);
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title || movie.name}
          </MovieLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
