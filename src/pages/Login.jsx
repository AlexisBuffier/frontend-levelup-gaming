// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });
      // Récupérer le token
      const { token } = response.data;
      // Stocker le token dans le localStorage ou un context
      localStorage.setItem('token', token);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold w-full"
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
