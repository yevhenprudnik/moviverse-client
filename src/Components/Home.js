import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserSearch from './UserSearch';
import { api } from '../api';
import {
  getCurrentUser,
  setCurrentUser,
  setSearchUser,
} from '../helpers/user.helper';

const Home = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const buttonStyles = 'ba b--transparent f5 fw6 pointer';

  useEffect(() => {
    (async () => {
      const response = await api.get('/auth');

      if (response.statusText === 'OK') {
        setIsAuthorized(true);

        setCurrentUser(response.data);
      } else {
        setIsAuthorized(false);
      }
    })();
  }, []);

  return (
    <div>
      {isAuthorized ? (
        <div>
          <p className="white">You are authorized!</p>
          <Link to="/movie">
            <button>Movies</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/collection">
            <button>Collections</button>
          </Link>
        </div>
      ) : (
        <div>
          <p className="white">You are not authorized.</p>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        <Link
          onMouseEnter={() => {
            setSearchUser(getCurrentUser?._id);
          }}
          to="/profile"
          className="w-70"
        >
          <button className={`w-40 br3 ma2 h3 bg-gold ${buttonStyles}`}>
            Profile
          </button>
        </Link>
        <Link to="/movie" className="w-70">
          <button className={`w-40 br3 ma2 h3 ${buttonStyles}`}>Movies</button>
        </Link>
        <Link to="/collection" className="w-70">
          <button className={`w-40 br3 ma2 h3 bg-orange ${buttonStyles}`}>
            Collections
          </button>
        </Link>
        <Link to="/user" className="w-70">
          <button className={`w-40 br3 ma2 h3 bg-dark-red ${buttonStyles}`}>
            Users
          </button>
        </Link>
      </div>
      <UserSearch />
    </div>
  );
};

export default Home;
