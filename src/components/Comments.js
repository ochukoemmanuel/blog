import React from 'react';
import './Comments.css';

const Comments = () => {
  return (
    <>
      <h3 className='items-center text-base md:text-3xl text-blog-black font-bold mb-9'>
        COMMENTS
      </h3>
      <div className='flex justify-between items-center'>
        <div>
          <svg
            className='w-9 h-9 md:w-16 md:h-16'
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
          className='border-b-2 py-1 text-xs md:text-sm outline-none w-4/6'
          type={`text`}
          placeholder='Share your thoughts...'
        />
        <button className='rotate bg-bookmark-grey p-2 md:p-4 rounded-full'>
          <svg
            className='w-4 h-4 md:w-6 md:h-6'
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
    </>
  );
};

export default Comments;
