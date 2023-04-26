import React, { useState } from 'react';
import { api } from '../api';

const UserSearch = () => {
  const [users, setUsers] = useState([]);

  const handleSearchChange = event => {
    const fetchUsers = async () => {
      const response = await api(`/user?keyword=${event.target.value}`);

      setUsers(response.data);
    };

    fetchUsers();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        onChange={handleSearchChange}
      />
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <div>
              <h3>{user.username}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
