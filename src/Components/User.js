import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
