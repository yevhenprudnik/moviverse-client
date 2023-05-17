import React from 'react';

const Movie = ({ movie }) => {
  const {
    title,
    subtitle,
    genre,
    year,
    director,
    runtime,
    image,
    trailer,
    synopsis,
  } = movie;

  return (
    <div className="bg-black-80 white pa4 mb4 br4 ma3 mh4 grow shadow-2 pointer w-90 center">
      <div className="flex flex-column flex-row-ns">
        <img
          className="w-50 w-25-ns mr3 br2"
          src={image}
          alt={`${title} poster`}
        />
        <div className="w-100 w-50-ns pl3-ns">
          <h1 className="mt0">{title}</h1>
          <h3 className="mt0">{subtitle}</h3>
          <p>Genre: {genre.join(', ')}</p>
          <p>Year: {year}</p>
          <p>Director: {director}</p>
          <p>Runtime: {runtime} minutes</p>
          <p>{synopsis}</p>
          <a
            className="link dim white dib mr3"
            href={trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
