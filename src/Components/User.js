import React from 'react';
import { getCurrentUser } from '../helpers/user.helper';

const User = () => {
  return (
    getCurrentUser && (
      <div className="white">
        <h2>Username: {getCurrentUser.username}</h2>
        <p>Email: {getCurrentUser.email}</p>
      </div>
    )
  );
};

export default User;
