import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
// import logo from '../images/logo-bookmark-white.png';

const Navbar = ({ toggle, isOpen }) => {
  useEffect(() => {}, [toggle]);

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
        <Search />
      </div>

      <div
        className='flex justify-end text-xl cursor-pointer md:hidden md:pr-9'
        onClick={toggle}
      >
        {!isOpen ? (
          <div>
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
        ) : (
          <div>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
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
