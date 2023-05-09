import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesTrending } from 'services/API';
import Loader from 'components/Loader';
import { Title, MovieList, MovieLink } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesTrending().then(data => {
      setMoviesTrending(data.results);
      setIsLoading(false);
      console.log(data);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList>
        {moviesTrending.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};

export default Home;
