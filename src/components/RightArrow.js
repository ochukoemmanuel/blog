import React from 'react';

const RightArrow = (props) => {
  const { onClick } = props;

  return (
    <>
      <div
        onClick={onClick}
        className='bg-blog-red text-white md:flex justify-around items-center w-16 h-16 rounded-full absolute top-1/4 right-0 md:-mr-5 z-50 hidden cursor-pointer'
      >
        <svg
          className='w-9 h-9'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>

      <div className='grad text-white hidden md:flex justify-around items-center text-center w-40 h-full absolute z-0 right-0 top-0'></div>
    </>
  );
};

export default RightArrow;
