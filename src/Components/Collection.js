import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollableList from './CollectionMovies';

const CollectionLayout = ({ collection }) => {
  const { title, author, image, movies } = collection;
  const navigate = useNavigate();

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
              {author?.username ? (
                <div
                  className="white pointer f3"
                  onClick={() => {
                    navigate('/profile/' + author._id);
                  }}
                >
                  @{author.username}
                </div>
              ) : (
                ' System'
              )}
            </p>
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
