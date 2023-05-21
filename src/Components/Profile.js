import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Collection from './Collection';
import { api } from '../api';

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await api.get(`/user/${id}`);

      setUser(response.data);
    })();
  });

  return (
    <div className="flex flex-column items-center">
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn1 ph4 pv2 mt3 f3">Home</button>
        </Link>
      </div>
      <div className="user-info">
        <div className="f2 fw6">
          Username: <span className="blue">{`${user.username}`}</span>
        </div>
        <div className="f2 fw6">
          Email: <span className="blue">{`${user.email}`}</span>
        </div>
      </div>
      <div className="white pa3 bg-black br3 f2">Collections</div>

      {user?.collections?.map(collection => (
        <Collection key={collection.title} collection={collection} />
      ))}
    </div>
  );
};

export default Profile;
