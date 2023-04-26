import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(
      'accessToken'
    )} ${localStorage.getItem('refreshToken')}`,
  },
});

api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;

    console.log(error.config);

    if (
      // error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;

      try {
        const response = await axios.get(
          'http://localhost:9000/auth/refresh',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                'accessToken'
              )} ${localStorage.getItem('refreshToken')}`,
            },
          },
          { withCredentials: true }
        );
        console.log('Using interceptor', response.data);

        const { accessToken, refreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken} ${response.data.refreshToken}`;

        return api.request(originalRequest);
      } catch (error) {
        console.log('Unauthorized');
      }
    }
    throw error;
  }
);
