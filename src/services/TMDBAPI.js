import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDgxMmQ0ZGRlMDQzOWRiOWU1MDdjMjRlOTg2MDE4YiIsInN1YiI6IjY1OTZiZTk3ZWEzN2UwMDZmYTRjYzg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKqZgPnoGp2P8xbZoeAqDZBkaBQqCapPfZH558cNmsc'
  }
};

export const fetchTrendingMovies = async() => {
    const response = await axios.get(`trending/movie/day`, options)
    return response.data.results;
};

export const fetchTrendingMoviesPages = async(page) => {
    const response = await axios.get(`trending/movie/day?page=${page}`, options)
    return response.data;
};

export const searchMovies = async (movieName) => {
    const response = await axios.get(`/search/movie?query=${movieName}`, options);
    return response.data.results;
};

export const fetchMoviesDetail = async movieId => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
};

export const fetchMovieCredits = async movieId => {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data.results;
};