import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (pages = 3) => {
  const allMovies = [];
  
  for (let page = 1; page <= pages; page++) {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    allMovies.push(...response.data.results);
  }
  
  return allMovies;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};