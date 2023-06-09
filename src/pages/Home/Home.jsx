import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'services/API';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMoviesTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchMoviesTrending()
      .then(data => {
        setMoviesTrending(data.results);
      })
      .catch(error => {
        error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
