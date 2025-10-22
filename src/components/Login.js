import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usersData from '../data/mockUserData.json';

const Login = () => {
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const user = usersData.users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (user) {
      setError('');
      alert(`Login successful! Welcome ${user.name}`);
    } else {
      setError('Invalid Mobile/Email or password');
    }
  };

  const handleGoogleLogin = () => {
    const googleUser = {
      id: usersData.users.length + 1,
      name: 'Google User',
      email: 'googleuser@example.com',
      password: 'google-login'
    };

    const exists = usersData.users.find(
      (u) => u.email.toLowerCase() === googleUser.email.toLowerCase()
    );

    if (!exists) {
      usersData.users.push(googleUser);
    }

    alert(`Logged in successfully as ${googleUser.name} via Google`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 font-poppins px-4">
      {/* Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1750535135593-3a8e5def331d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700"
            alt="logo"
            className="w-28 rounded-lg"
          />
        </div>

        {/* Form */}
        <form className="text-left" onSubmit={handleLogin}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

          {/* Mobile/Email */}
          <label htmlFor="email" className="block text-sm mb-1 font-medium">Mobile/Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Login with mobile or email"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          {/* <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}

          {error && <p className="text-red-500 mb-2">{error}</p>}

          {/* Remember Me + Forget Password */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4"/>
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="#" className="text-red-500 hover:underline">Forget Password?</Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition-colors mb-4 cursor-pointer"
          >
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400 mb-4">Or login with</div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-3 py-2 rounded-md hover:bg-gray-50 transition-colors mb-4 font-semibold cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <img src='./google-icon.svg' alt="Google" className="w-6"/>
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm mt-4 text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
