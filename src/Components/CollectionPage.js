import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Collection from './Collection';
import { api } from '../api';
import CreateCollection from '../modals/create collection/CreateCollection';
import CreateCollectionModal from '../modals/create collection/CreateCollectionModal';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {isModalOpen && (
        <CreateCollectionModal>
          <div className="create-collection-modal">
            <CreateCollection setIsModalOpen={setIsModalOpen} />
          </div>
        </CreateCollectionModal>
      )}
      <div className="flex justify-around items-center mv4">
        <div>
          <Link to="/">
            <button className="btn1 ph3 pv2 mh1">Home</button>
          </Link>
          <button
            className="btn1 ph3 pv2 mh1"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            New Collection
          </button>
          <input
            className="searchMovies"
            type="text"
            placeholder="Search collections"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {collections.map(collection => (
        <Collection key={collection.title} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionPage;
