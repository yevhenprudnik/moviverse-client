import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import User from './User';

const Home = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get('/auth')
      .then(response => {
        setIsAuthorized(true);

        setUser(response.data);
      })
      .catch(error => setIsAuthorized(false));
  }, []);

  return (
    <div>
      {isAuthorized ? (
        <div>
          <p>You are authorized!</p>
          <User user={user} />

          <Link to="/movie">
            <button>Movies</button>
          </Link>

          <Link to="/collection">
            <button>Collections</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>You are not authorized.</p>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
