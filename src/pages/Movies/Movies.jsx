import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchMovieByQuery } from 'services/API';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [movies, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setIsLoading(true);

    fetchMovieByQuery(movieName)
      .then(data => {
        if (!data.results.length) {
          setError(true);
          return console.log(
            'There are no movies with this request. Please,1 try again.'
          );
        }

        setMoviesList(data.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieName]);

  const handleSubmit = query => {
    setSearchParams({ movieName: query });
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <>There are no movies with this request. Please, try again.</>}
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;
