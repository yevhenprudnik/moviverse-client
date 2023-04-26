import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { api } from '../api';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api(`/movie?keyword=${searchKeyword}`);

      setMovies(response.data);
    };

    fetchMovies();
  }, [searchKeyword]);

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search movies"
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </div>
      {movies.map(movie => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MoviePage;
