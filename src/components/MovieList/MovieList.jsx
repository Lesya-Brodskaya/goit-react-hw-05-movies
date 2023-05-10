import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieList.styled';

const MovieList = ({movies}) => {
     const location = useLocation();
    return (
        { movies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
    )
};

export default MovieList;