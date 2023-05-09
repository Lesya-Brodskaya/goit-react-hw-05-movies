import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchMovieByQuery } from '../API';
import { Loader } from '../Loader';
import SearchBar from '../SearchBar';
import { MovieList, MovieLink } from './Home.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    fetchMovieByQuery(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There are no movies with this request. Please,1 try again.'
        );
      }

      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();

    const searchForm = event.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <>There are no movies with this request. Please, try again.</>}
      <MovieList>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieLink>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};

export default Movies;
