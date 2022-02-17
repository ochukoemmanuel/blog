import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo-bookmark-white.png';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='px-9 py-4 2xl:px-80 flex justify-between gap-18 items-center border-b-2 border-blog-lightgrey'
      role='navigation'
    >
      <div className='py-1'>
        <Link to='/'>
          {/* <img src={logo} alt='logo' /> */}
          <h1 className='font-black text-2xl'>LOGO.</h1>
        </Link>
      </div>

      <div className='hidden md:flex flex-grow-0 align-middle items-center text-bookmark-blue uppercase text-xs border border-blog-lightgrey w-7/12'>
        <input
          className='text-lg font-medium w-full px-8 outline-none bg-white'
          placeholder='Search'
        />
        <div className='bg-blog-darkgrey p-3 cursor-pointer'>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>

      <div
        className='flex justify-end text-xl cursor-pointer md:hidden md:pr-9'
        onClick={toggle}
      >
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
      </div>

      <button
        type='button'
        className='hidden md:block bg-blog-red text-white rounded-md px-3 py-2.5 uppercase text-xs'
      >
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
