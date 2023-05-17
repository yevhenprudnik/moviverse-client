import React, { useState } from 'react';
import { api } from '../api';
import { setSearchUser } from '../helpers/user.helper';

const UserSearch = () => {
  const [users, setUsers] = useState([]);

  const handleSearchChange = event => {
    const fetchUsers = async () => {
      const response = await api(`/user?keyword=${event.target.value}`);

      setUsers(response.data);
    };

    fetchUsers();
  };

  const handleUserSelect = uid => {
    setSearchUser(uid);

    window.location.replace('/profile');
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
          <li
            key={user._id}
            className="white pointer"
            onClick={() => handleUserSelect(user._id)}
          >
            <div>
              <h3 className="">{user.username}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
