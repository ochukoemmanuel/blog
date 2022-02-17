import React from 'react';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'z-50 absolute top-16 w-full flex text-center items-center'
          : 'hidden'
      }
    >
      <div className='bg-white flex flex-grow-0 align-middle items-center text-bookmark-blue uppercase text-xs border border-blog-lightgrey w-full'>
        <input
          className='text-lg font-medium w-full px-8 outline-none bg-white'
          placeholder='Search'
        />
        <div className='bg-blog-darkgrey p-3 cursor-pointer hover:bg-blog-lightgrey transition duration-300'>
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
    </div>
  );
};

export default Dropdown;
