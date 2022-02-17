import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo-bookmark-white.png';

const Footer = () => {
  return (
    <footer className='bg-white py-8 border-t-2 border-blog-lightgrey'>
      <div className='container flex flex-col md:flex-row justify-between items-center'>
        <Link to='/' className=''>
          <h1 className='font-black text-2xl'>LOGO.</h1>
          {/* <img src={logo} alt='logo' /> */}
        </Link>
        <div className='flex text-blog-black text-center mt-9 md:mt-0 gap-6 md:gap-12 px-16 text-xs'>
          <Link className='cursor-pointer' to='#'>
            COPYRIGHT 2020 All rights reserved
          </Link>
        </div>

        <div className='flex gap-10 mt-12 md:mt-0 text-3xl'>
          <div className='text-blue-400'>
            <Link to='/'>
              <i className='bx bxl-twitter'></i>
            </Link>
          </div>
          <Link to='/'>
            <div>
              <i className='bx bxl-instagram-alt'></i>
            </div>
          </Link>
          <div className='text-blue-700'>
            <Link to='/'>
              <i className='bx bxl-facebook-circle'></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
