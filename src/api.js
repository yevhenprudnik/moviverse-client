import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(
      'accessToken'
    )} ${localStorage.getItem('refreshToken')}`,
  },
});

const refreshAccessToken = async () => {
  const response = await api.get(
    '/auth/refresh',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'accessToken'
        )} ${localStorage.getItem('refreshToken')}`,
      },
    },
    { withCredentials: true }
  );

  return response.data;
};

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (!!originalRequest._retry) {
      originalRequest._retry = true;

      const { accessToken, refreshToken } = await refreshAccessToken();

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      originalRequest.headers[
        'Authorization'
      ] = `Bearer ${accessToken} ${refreshToken}`;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
