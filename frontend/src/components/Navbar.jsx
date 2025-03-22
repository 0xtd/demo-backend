import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className='flex flex-row justify-around items-center bg-gray-800 text-white p-4'
    >
      {/* Logo */}
      <Link to='/'>
        <h1 className='text-2xl font-bold'>Logo</h1>
      </Link>
      {/* Navigation Links */}
      <ul
        className='flex flex-row items-center space-x-4'
      >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/all-books">All Books</a></li>
      </ul>

      {/* Login Button */}
      <Link to='/login'>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer'
        >
          Login
        </button>
      </Link
      >
    </div>
  )
}

export default Navbar