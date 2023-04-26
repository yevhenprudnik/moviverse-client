import React, { useState, useEffect } from 'react';
import Collection from './Collection';
import { api } from '../api';
import CreateCollection from './CreateCollection';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api(`/collection?keyword=${searchKeyword}`);

      setCollections(response.data);
    };

    fetchMovies();
  }, [searchKeyword]);

  const handleSearchChange = event => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search collections"
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </div>
      <div className='dib'>
        {collections.map(collection => (
          <Collection key={collection.title} collection={collection} />
        ))}
      </div>
      <CreateCollection />
    </div>
  );
};

export default CollectionPage;
