import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { setCurrentUser, getCurrentUser } from '../helpers/user.helper';
import UserSearch from './UserSearch';

const Home = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

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

  function logOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="flex flex-column">
      <div className="flex justify-end w-100">
        <UserSearch />
      </div>
      {isAuthorized ? (
        <div className="bg-black-tsp mt6 flex flex-column items-center">
          <div className="white fw6 f1 tc green mt5">You are authorized.</div>
          <div className="flex flex-column mv5">
            <Link to="/movie" className="menuBtn bg-green">
              Movies
            </Link>
            <Link
              to={'/profile/' + getCurrentUser._id}
              className="menuBtn bg-blue"
            >
              Profile
            </Link>
            <Link to="/collection" className="menuBtn bg-yellow">
              Collections
            </Link>
            <button
              className="menuBtn bg-red"
              onClick={() => {
                logOut();
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black mt7 flex flex-column items-center">
          <div className="white fw6 f1 tc orange mt5">
            You are not authorized.
          </div>
          <div className="flex justify-between items-center mv5 w25">
            <Link to="/sign-in">
              <button className="authBtn f2 pv2 ph3">Sign In</button>
            </Link>
            <Link to="/sign-up">
              <button className="authBtn f2 pv2 ph3">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
