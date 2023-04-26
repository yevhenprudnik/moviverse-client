import React from 'react';

const CollectionLayout = ({ collection }) => {
  const { title, author, image } = collection;

  return (
    <div className="collection-layout tc dib br4 pa3 ma3 grow bw2 shadow-2 w-30 pointer">
      <h2>{title}</h2>
      <div className="author-info">
        <p>Author: {author?.username ? author.username : 'System'}</p>
      </div>
      <img className="w-100 w-50-ns mr3 br2" src={image} alt={`${title} poster`} />
    </div>
  );
};

export default CollectionLayout;
