import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await api.post('/auth/sign-in', {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
      alert('An error had occurred:\n' + error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="measure center">
      <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0" style={{ color: '#C69749' }}>
          Sign In
        </legend>
        <div className="mt3">
          <label
            className="db fw6 lh-copy f6"
            style={{ color: '#282A3A' }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mv3">
          <label
            className="db fw6 lh-copy f6"
            style={{ color: '#282A3A' }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            style={{ backgroundColor: '#000000', color: '#C69749' }}
            type="submit"
          >
            Sign In
          </button>
          <Link to="/sign-up" className="pl2">
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
              Sign Up
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default SignIn;
