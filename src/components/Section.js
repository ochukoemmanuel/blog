import React from 'react';
import Tab from '../images/illustration-features-tab-2.png';

const Section = () => {
  return (
    <div className='relative mt-20 lg:mt-54'>
      <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
        <div className='flex flex-1 flex-col items-center lg:items-start'>
          <h1 className='text-3xl text-bookmark-blue'>Intelligent search</h1>
          <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to crawl through all of your bookmarks.
          </p>
          <button
            type='button'
            class='btn btn-purple hover:bg-white hover:text-black'
          >
            More Info
          </button>
        </div>
      </div>
      <div className='hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-11 lg:right-0'></div>
    </div>
  );
};

export default Section;
