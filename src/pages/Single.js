import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import song1 from '../images/song1.jpg';
import Comments from '../components/Comments';
import Lyrics from '../components/Lyrics';

const Single = ({ Nav }) => {
  Nav();
  return (
    <div className='container flex flex-col md:flex-row space-x-9 py-9 mt-6 lg:mt-9 px-5 lg:px-0'>
      <div className='flex-1'>
        <img className='w-full mb-12' src={song1} alt='' />
        <div className='flex w-full flex-col border rounded p-6 md:p-9'>
          <h3 className='items-center text-base md:text-3xl text-center text-blog-black font-bold mb-9'>
            ONE ON ONE - Dunsin Oyekan
          </h3>
          <button className='bg-blog-red py-4 w-5/6 rounded text-sm md:text-xl mx-auto text-white mb-9'>
            Download mp3
          </button>
          <hr className='bg-blog-lightgrey w-full mb-9'></hr>

          <p className='text-bookmark-grey mb-9 text-sm md:text-base'>
            Talented and award-winning gospel Artist DUNISIN OYEKAN has come in
            with yet another sensational gospel track which he titles ONE ON
            ONE. This track comes in after his recent track ASCEND. Use the link
            below to stream and download this track ONE ON ONE by DUNISIN
            OYEKAN.
          </p>

          <hr className='bg-blog-lightgrey w-full mb-6'></hr>
          <ul className='flex justify-center text-bookmark-grey text-xs md:text-sm space-x-3 md:space-x-9 mb-6 flex-wrap'>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/'>Gospel</Link>
            </li>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/'>Gospel</Link>
            </li>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/'>Gospel</Link>
            </li>
          </ul>
        </div>

        <div className='flex-1 block md:hidden border rounded p-6 md:p-9 mt-10'>
          <Lyrics />
        </div>

        <div className='flex flex-col border rounded p-6 md:p-9 mt-10'>
          <Comments />
        </div>
      </div>

      <div className='flex-1 hidden md:block'>
        <Lyrics />
      </div>
    </div>
  );
};

export default Single;
