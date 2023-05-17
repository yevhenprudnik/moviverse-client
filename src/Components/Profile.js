import { useEffect, useState } from 'react';
import CollectionLayout from './Collection';
import { api } from '../api';
import { getSearchUser } from '../helpers/user.helper';

const Profile = () => {
  const [user, setUser] = useState({});
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (getSearchUser) {
      (async () => {
        const response = await api.get(`/user/${getSearchUser}`);

        setUser(response.data);

        setCollections(response.data.collections);
      })();
    }
  }, []);

  return (
    <div className="white tc">
      <h2>Username: {user.username}</h2>
      <p>Email: {user.email}</p>
      Collections:
      {collections.map(collection => (
        <CollectionLayout key={collection.title} collection={collection} />
      ))}
    </div>
  );
};

export default Profile;
