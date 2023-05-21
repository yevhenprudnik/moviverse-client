import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='flex justify-around items-center mv4'>
        <div>
          <Link to='/'>
            <button className='btn1 ph3 pv2'>Home</button>
          </Link>
          <input
            className='searchMovies'
            type='text'
            placeholder='Search movies'
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {movies.map((movie) => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MoviePage;
