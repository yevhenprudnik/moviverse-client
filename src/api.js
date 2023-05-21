import axios from 'axios';

export const api = axios.create(
  {
    baseURL: 'http://localhost:9000',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        'accessToken'
      )} ${localStorage.getItem('refreshToken')}`,
    },
  },
  { withCredentials: true }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (!originalRequest._retry) {
      originalRequest._retry = true;

      const { data } = await api.get('/auth/refresh');

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      originalRequest.headers[
        'Authorization'
      ] = `Bearer ${data.accessToken} ${data.refreshToken}`;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
