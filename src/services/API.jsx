import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '265284652100bb67997703a1d052ae84';

export async function fetchMoviesTrending() {
  const url = `${BASE_URL}trending/all/day?api_key=${KEY}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByQuery(query) {
  const url = `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieDetails(id) {
  const url = `${BASE_URL}movie/${id}?api_key=${KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieCast(id) {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviews(id) {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
