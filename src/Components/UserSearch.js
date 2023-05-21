import React from 'react';
import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import { api } from '../api';

const UserSearch = () => {
  const loadOptions = async inputValue => {
    const response = await api(`/user?keyword=${inputValue}`);
    const users = response.data;

    return users.map(user => ({
      value: user._id,
      label: (
        <Link className="black" to={'/profile/' + user._id}>
          {user.username}
        </Link>
      ),
    }));
  };

  return (
    <AsyncSelect
      className="new-collection-selector w-25"
      loadOptions={loadOptions}
    />
  );
};

export default UserSearch;
