import React from 'react';
import Tab from '../images/illustration-features-tab-3.png';

const Section2 = () => {
  return (
    <div className='relative mt-20 lg:mt-52'>
      <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
        <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
          <img
            className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
            src={Tab}
            alt=''
          />
        </div>
        <div className='flex flex-1 flex-col items-center lg:items-start mb-10 lg:mb-0'>
          <h1 className='text-3xl text-bookmark-blue'>Share your bookmarks</h1>
          <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button
            type='button'
            class='btn btn-purple hover:bg-white hover:text-black'
          >
            More info
          </button>
        </div>
      </div>
      <div className='hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36'></div>
    </div>
  );
};

export default Section2;
