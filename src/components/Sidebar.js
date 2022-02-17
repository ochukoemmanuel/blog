import React from 'react';
import { Link } from 'react-router-dom';
import ads from '../images/ads.jpg';

const Sidebar = () => {
  return (
    <div className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4'>
      <Link to='/'>
        <img className='w-full' src={ads} alt='' />
      </Link>
      {/* <p className='text-bookmark-grey mt-4'>Album</p> */}
    </div>
  );
};

export default Sidebar;
