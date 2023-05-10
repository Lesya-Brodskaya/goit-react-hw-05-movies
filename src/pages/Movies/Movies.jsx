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
