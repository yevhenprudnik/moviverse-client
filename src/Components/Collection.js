import React from 'react';
import ScrollableList from './CollectionMovies';

const CollectionLayout = ({ collection }) => {
  const { title, author, image, movies } = collection;

  return (
    <div className="bg-black white pa4 mb4 br3 ma3 mh4 shadow-2 w-90 center">
      <div className="flex flex-column flex-row-ns">
        <div className="w-30 pr1">
          <img className="mr3 br2" src={image} alt={`${title} poster`} />
          <div className="pl3-ns">
            <h1 className="mt0">{title}</h1>
            <p>Author: {author?.username ? author.username : 'System'}</p>
          </div>
        </div>
        {!!movies.length && (
          <div className="w-70 pl1 mb0">
            <ScrollableList items={movies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionLayout;
