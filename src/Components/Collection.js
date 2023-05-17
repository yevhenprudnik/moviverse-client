import React from 'react';
import ScrollableList from './CollectionMovies';
import { getCurrentUser } from '../helpers/user.helper';

const CollectionLayout = ({ collection }) => {
  const { title, author, image, movies } = collection;

  const isAuthor = getCurrentUser && getCurrentUser._id === author?._id;

  return (
    <div className="bg-black-80 white pa4 mb4 br3 ma3 mh4 shadow-2 w-90 center">
      <div className="flex flex-column flex-row-ns">
        <div className="w-30 pr1">
          {image && (
            <img className="mr3 br2" src={image} alt={`${title} poster`} />
          )}
          <div className="pl3-ns">
            <h1 className="mt0">{title}</h1>
            <p className="f6 fw4 mt0">
              Author: {author?.username ? author.username : ' System'}
            </p>
          </div>
        </div>
        {!!movies.length && (
          <div className="w-70 pl1 mb0">
            <ScrollableList items={movies} />
          </div>
        )}
      </div>
      {isAuthor && (
        <div className="flex justify-between mt4">
          <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-red">
            Delete Collection
          </button>
          <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-green">
            Edit Collection
          </button>
        </div>
      )}
    </div>
  );
};

export default CollectionLayout;
