import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/auth/sign-in', {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.replace('/');
    } catch (error) {
      alert('An error had occurred:\n' + error?.response?.data?.message);
    }
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='mt6'>
        <fieldset id='sign_in' className='pa5 br4 bg-black'>
          <legend className='orange f1 fw6 bg-black br4'>Sign In</legend>
          <div className='flex flex-column mv4'>
            <label className='f3 orange' htmlFor='email'>
              Email
            </label>
            <input
              className='f4 authInput'
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className='flex flex-column mv4'>
            <label className='f3 orange' htmlFor='password'>
              Password
            </label>
            <input
              className='f4 authInput'
              type='password'
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className='flex justify-between'>
            <Link to='/'>
              <button className='btn1 ph3 pv2'>Back</button>
            </Link>
            <button className='btn1 ph3 pv2' type='submit'>
              Sign In
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
