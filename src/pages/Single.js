import React from 'react';
import { Link } from 'react-router-dom';
import song1 from '../images/song1.jpg';

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

        <div className='flex flex-col border rounded p-6 md:p-9 mt-10'>
          <h3 className='items-center text-base md:text-3xl text-blog-black font-bold mb-9'>
            COMMENTS
          </h3>
          <div className='flex justify-between items-center'>
            <div>
              <svg
                className='w-11 h-11 md:w-16 md:h-16'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <input
              className='border-b-2 py-1 text-sm outline-none w-4/6'
              type={`text`}
              placeholder='Share your thoughts...'
            />
            <button>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
              </svg>
            </button>
          </div>
          <p className='text-sm md:text-lg font-medium text-center mt-16 mb-2'>
            No comments yet.
          </p>
          <p className='text-bookmark-grey text-xs md:text-base text-center mb-9'>
            Be the first to show some love!
          </p>
        </div>
      </div>

      <div className='flex-1 hidden md:block'>
        <div className='flex justify-between items-center mb-9'>
          <h3 className='font-bold text-3xl'>LYRICS</h3>
          <h3 className='font-bold text-xl cursor-pointer'>COPY LYRICS</h3>
          <div className='cursor-pointer'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
            </svg>
          </div>
        </div>
        <p className='text-bookmark-grey text-lg'>
          Am counting back your love and mercies cause they are ever new lord I
          have a reason to praise your name no matter what am going through as
          long as I live lord I have a reason to lift my hand in praise no
          matter what am going through lord as long as I breath
        </p>
      </div>
    </div>
  );
};

export default Single;
