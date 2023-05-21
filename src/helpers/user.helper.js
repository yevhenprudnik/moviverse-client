export const getCurrentUser = JSON.parse(localStorage.getItem('user'));

export const setCurrentUser = user =>
  localStorage.setItem('user', JSON.stringify(user));

export const getSearchUser = localStorage.getItem('searchUser');

export const setSearchUser = uid => localStorage.setItem('searchUser', uid);
